'use strict'

const { CompletionProvider } = require('classes/completion_provider.js')
const { DataProvider }       = require('classes/data_provider.js')
const { List }               = require('classes/list.js')

const FUNCTIONS              = require('./functions.js')
const SUPPORTED_FILE_TYPES   = [ 'html', 'html+erb', 'html+eex', 'haml', 'php', 'blade', 'twig',
  'vue', 'js', 'jsx', 'ts', 'tsx', 'svelte', 'liquid', 'jade', 'pug']

var completionAssistant = null

var list = null
var backgroundsTreeView = null
var backgroundsDataProvider = null

var treeViewDisposables = new CompositeDisposable()

exports.activate = async function() {
  if (nova.inDevMode()) {
    console.clear()
    console.log('TAILWIND CSS -- DEV MODE ACTIVE')
  }

  try {
    await registerCompletionAssistant()

    list = new List()
    await list.loadDefinitions()
    await registerTreeViews()

    nova.workspace.config.observe('tailwindcss.workspace.version', reloadCompletionAssistant)
  } catch (error) {
    FUNCTIONS.showConsoleError(error)
  }

}

exports.deactivate = function() {
  completionAssistant.dispose()
  // treeViewDisposables.dispose()
}

async function registerTreeViews() {
  backgroundsDataProvider = new DataProvider(list.items)

  backgroundsTreeView = new TreeView('tw-sidebar-classes', {
    dataProvider: backgroundsDataProvider
  })

  treeViewDisposables.add(backgroundsTreeView)

  return true
}

async function registerCompletionAssistant() {
  completionAssistant = nova.assistants.registerCompletionAssistant(SUPPORTED_FILE_TYPES, new CompletionProvider())

  return true
}

function reloadCompletionAssistant() {
  completionAssistant.dispose()
  registerCompletionAssistant()
}
