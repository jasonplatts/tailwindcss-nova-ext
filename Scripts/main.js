'use strict'

const FUNCTIONS              = require('./functions.js')
const { Configuration }      = require('./configuration.js')
const { CompletionProvider } = require('./completion_provider.js')
const { DataProvider }       = require('./data_provider.js')
const { List }               = require('./list.js')

var config                   = null
var completionAssistant      = null
var sidebar                  = {
  list:         null,
  dataProvider: null,
  treeView:     null,
}
var extensionDisposables     = new CompositeDisposable()
var reloading = false

exports.activate = async function() {
  if (nova.inDevMode()) {
    console.clear()
    console.log('TAILWIND CSS -- DEV MODE ACTIVE')
  }

  loadExtension()
}

exports.deactivate = function() {
  extensionDisposables.dispose()
}

async function loadExtension() {
  try {
    config = new Configuration()

    await config.loadDefinitions()

    await registerCompletionAssistant()
    await registerTreeView()

    if (config.tailwindConfigFilePath !== null) {
      extensionDisposables.add(nova.fs.watch(config.tailwindConfigFilePath, reloadExtension))
    }

    nova.workspace.config.onDidChange('tailwindcss.workspace.tailwindConfig', reloadExtension)
  } catch (error) {
    FUNCTIONS.showConsoleError(error)
  }

  return
}

async function reloadExtension() {
  if (reloading == false) {
    reloading = true

    extensionDisposables.dispose()
    config, completionAssistant, sidebar.list, sidebar.dataProvider, sidebar.treeView = null

    await loadExtension()
    sidebar.treeView.reload()

    reloading = false
  }
}

async function registerCompletionAssistant() {
  let completionProvider = new CompletionProvider(Configuration.VERSION, config)

  await completionProvider.loadCompletionItems()

  extensionDisposables.add(nova.assistants.registerCompletionAssistant(Configuration.SUPPORTED_FILE_TYPES, completionProvider))

  return true
}

async function registerTreeView() {
  sidebar.list = new List(Configuration.VERSION, config)

  await sidebar.list.loadDefinitions()

  sidebar.dataProvider = new DataProvider(sidebar.list.items)

  sidebar.treeView = new TreeView('tw-sidebar-classes', {
    dataProvider: sidebar.dataProvider
  })

  extensionDisposables.add(sidebar.treeView)

  return true
}

nova.commands.register('tailwind.openDocs', () => {
  nova.openURL(Configuration.TAILWIND_DOCS_URL)
})

nova.commands.register('tailwind.doubleClick', () => {
  if (sidebar.treeView.selection[0].children == 0) {
    nova.workspace.activeTextEditor.insert(sidebar.treeView.selection[0].name)
  }
})

nova.commands.register('tailwind.openCategoryDocs', () => {
  nova.openURL(Configuration.TAILWIND_DOCS_URL + FUNCTIONS.camelCaseToLowercaseDash(sidebar.treeView.selection[0].urlName))
})
