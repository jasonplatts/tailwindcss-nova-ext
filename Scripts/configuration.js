'use strict'

const FUNCTIONS = require('./functions.js')

/*
  Class handles the retrieval of default and user preference configurations
*/
exports.Configuration = class Configuration {
  constructor() {
    this._definitions = []
  }

  /*
    List of file types that should activate completions.
  */
  static get SUPPORTED_FILE_TYPES() {
    return [
      'html', 'html+erb', 'html+eex', 'haml', 'php', 'blade', 'twig',
      'vue', 'js', 'jsx', 'ts', 'tsx', 'svelte', 'liquid', 'jade', 'pug'
    ]
  }

  /*
    The current version of Tailwind supported by the extension.
    This is also the name of the directory containing the definition files.
  */
  static get VERSION() {
    return '2.2.4'
  }

  /*
    List of definition files containing Tailwind classes.
    Files are listen manually in order to set desired sort order for sidebar.
  */
  static get DEFINITION_FILES() {
    return [
      'core-concepts.js',
      'layout.js',
      'flexbox-and-grid.js',
      'spacing.js',
      'sizing.js',
      'typography.js',
      'backgrounds.js',
      'borders.js',
      'effects.js',
      'tables.js',
      'transitions-and-animation.js',
      'transforms.js',
      'interactivity.js',
      'svg.js',
      'accessibility.js',
    ]
  }

  /*
    Gets Tailwind CSS class definitions in the form of an array Category objects,
    each containing an array of SubCategory objects with an array of Tailwind
    UtilityClass objects. The Tailwind UtilityClass objects have a label, detail,
    and documentation property.
  */
  get defintions() {
    return this._definitions
  }

  /*
    Loads all definition files defined in the Configuration.DEFINITION_FILES constant.
  */
  async loadDefinitions() {
    Configuration.DEFINITION_FILES.forEach(definition => {
      this._definitions = [...this._definitions, require(`../Definitions/${Configuration.VERSION}/${definition}`)]
    })

    return
  }
}
