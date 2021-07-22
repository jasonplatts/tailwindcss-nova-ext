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
var treeViewDisposables      = new CompositeDisposable()

exports.activate = async function() {
  if (nova.inDevMode()) {
    console.clear()
    console.log('TAILWIND CSS -- DEV MODE ACTIVE')
  }

  try {
    config = new Configuration()

    await config.loadDefinitions()

    await registerCompletionAssistant()
    await registerTreeView()

    nova.workspace.config.onDidChange('tailwindcss.workspace.version', reloadCompletionAssistant)
  } catch (error) {
    FUNCTIONS.showConsoleError(error)
  }
}

exports.deactivate = function() {
  completionAssistant.dispose()
  treeViewDisposables.dispose()
}

async function registerCompletionAssistant() {
  let completionProvider = new CompletionProvider(Configuration.VERSION, config)

  await completionProvider.loadCompletionItems()

  completionAssistant = nova.assistants.registerCompletionAssistant(Configuration.SUPPORTED_FILE_TYPES, completionProvider)

  return true
}

async function registerTreeView() {
  sidebar.list = new List(Configuration.VERSION, config)

  await sidebar.list.loadDefinitions()

  sidebar.dataProvider = new DataProvider(sidebar.list.items)

  sidebar.treeView = new TreeView('tw-sidebar-classes', {
    dataProvider: sidebar.dataProvider
  })

  treeViewDisposables.add(sidebar.treeView)

  return true
}

function reloadCompletionAssistant() {
  completionAssistant.dispose()
  registerCompletionAssistant()
}

function reloadExtension() {
  // TODO: Add completion assistant and treeview reloading here.
  console.log('RELOADING...')
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

nova.workspace.config.observe('tailwindcss.workspace.tailwindConfig', reloadExtension)
