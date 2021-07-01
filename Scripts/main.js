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

//     let tailwindConfigFile = nova.fs.open('/Volumes/Macintosh HD/Users/jasonplatts/Sites/nova-extensions/completions/tailwindcss.novaextension/Sample Files/tailwind.config.js')
//     let contents = tailwindConfigFile.readlines()
//     tailwindConfigFile.close()
//
//     let newString = ''
//
//     contents.forEach((line) => {
//       if (!line.includes('require(')) {
//         newString = newString + line
//       }
//     })
//
//     let temp = eval(newString)
//     // let temp = JSON.stringify(contents)
//     console.log('contents', temp.theme.extend.colors['rails-blue'][900])
  // nova.workspace.config.observe('tailwindcss.workspace.version', reloadCompletionAssistants)
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

  backgroundsTreeView = new TreeView('tailwindBackgrounds', {
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
  registerCompletionAssistants()
}
