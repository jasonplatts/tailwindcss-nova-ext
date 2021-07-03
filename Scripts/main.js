'use strict'

const FUNCTIONS              = require('./functions.js')
const { Configuration }      = require('./configuration.js')
const { CompletionProvider } = require('./completion_provider.js')
const { DataProvider }       = require('./data_provider.js')
const { List }               = require('./list.js')

var config                   = null
var completionAssistant      = null
var list                     = null
var backgroundsTreeView      = null
var backgroundsDataProvider  = null
var treeViewDisposables      = new CompositeDisposable()

exports.activate = async function() {
  if (nova.inDevMode()) {
    console.clear()
    console.log('TAILWIND CSS -- DEV MODE ACTIVE')
  }

  try {
    config = new Configuration()

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

async function registerTreeView() {
  list = new List()
  await list.loadDefinitions()

  backgroundsDataProvider = new DataProvider(list.items)

  backgroundsTreeView = new TreeView('tw-sidebar-classes', {
    dataProvider: backgroundsDataProvider
  })

  treeViewDisposables.add(backgroundsTreeView)

  return true
}

async function registerCompletionAssistant() {
  let completionProvider = new CompletionProvider(config.getVersion(), config.getVersionDefinitionFiles())

  await completionProvider.loadDefinitions()
  await completionProvider.loadCompletionItems()

  completionAssistant = nova.assistants.registerCompletionAssistant(Configuration.SUPPORTED_FILE_TYPES, completionProvider)

  return true
}

function reloadCompletionAssistant() {
  completionAssistant.dispose()
  registerCompletionAssistant()
}
