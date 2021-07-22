'use strict'

const FUNCTIONS = require('./functions.js')

/*
  Class handles the retrieval of default and user preference configurations
*/
exports.Configuration = class Configuration {
  constructor() {
    const COLORS      = require(`../Definitions/${Configuration.VERSION}/includes/colors.js`)
    const SCALES      = require(`../Definitions/${Configuration.VERSION}/includes/scales.js`)
    this._colors      = COLORS.COLORS
    this._scales      = SCALES

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
    The base URL for Tailwind documentation.
  */
  static get TAILWIND_DOCS_URL() {
    return 'https://tailwindcss.com/docs/'
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
      'filters.js',
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
  get definitions() {
    return this._definitions
  }

  /*
    Returns Tailwind colors, including modified colors.
  */
  get colors() {
    return this._colors
  }

  /*
    Returns Tailwind scales, including modified scales.
  */
  get scales() {
    return this._scales
  }

  /*
    Loads all definition files defined in the Configuration.DEFINITION_FILES constant.
  */
  async loadDefinitions() {
    await this.loadTailwindConfig()

    Configuration.DEFINITION_FILES.forEach(definition => {
      this._definitions = [...this._definitions, require(`../Definitions/${Configuration.VERSION}/${definition}`)]
    })

    return
  }

  /*
    Finds tailwind.config.js file within the project directory.
  */
  async findTailwindConfigFiles() {
    return new Promise((resolve, reject) => {
      let returnValue = {
        status: 0,
        stdout: [],
        stderr: [],
      }

      let path = FUNCTIONS.normalizePath(nova.workspace.path)

      let options = {
        args: ['-name', 'tailwind.config.js', '-onlyin', path]
      }

      let process = new Process('/usr/bin/mdfind', options)

      process.onStdout((l) => {
        returnValue.stdout.push(l.trim())
      })

      process.onStderr((l) => {
        returnValue.stderr.push(l.trim())
      })

      process.onDidExit((status) => {
        returnValue.status = status
        if (status === 0) {
          resolve(returnValue)
        } else {
          reject(returnValue)
        }
      })

      try {
        process.start()
      } catch (e) {
        returnValue.status = 128
        returnValue.stderr = [e.message]
        reject(returnValue)
      }
    })
  }

  /*
    Reads the contents of the Tailwind config file into a JavaScript
    object compatible with commonJS. I.E. - No require statements.
  */
  async readConfigFile(configFilePath) {
    let tailwindConfigFile = nova.fs.open(configFilePath)
    let contents           = tailwindConfigFile.readlines()
    let newContents        = ''

    tailwindConfigFile.close()

    // Remove any lines including the require, such as 'require('@tailwindcss/forms')'
    contents.forEach((line) => {
      if (!line.includes('require(')) {
        newContents = newContents + line
      }
    })

    let configObject = eval(newContents)

    return configObject
  }

  /*
    Find and load any custom Tailwind config file.
  */
  async loadTailwindConfig() {
    try {
      let tailwindConfigPath   = nova.workspace.config.get('tailwindcss.workspace.tailwindConfig')
      let tailwindConfigObject = null

      // If config file location not supplied by user,
      // then search in the workspace for tailwind.config.js files.
      if (tailwindConfigPath == null) {
        if (FUNCTIONS.isWorkspace()) {
          let detectedConfigFiles = await this.findTailwindConfigFiles()

          // If a single tailwind.config.js file found, read it.
          if (detectedConfigFiles.stdout.length == 1) {
            tailwindConfigPath = detectedConfigFiles.stdout[0]
          } else if (detectedConfigFiles.stdout.length > 1) {
            FUNCTIONS.showNotification('Tailwind Configuration Files',
              'Multiple Tailwind config files were found. If you wish to include user defined or ' +
              'modified Tailwind classes, please go to the extension preferences and set the correct ' +
              '\'tailwind.config.js\' file for this project.')
          } else {
            // FUNCTIONS.showNotification('Tailwind Configuration Files',
            //   'No \'tailwind.config.js\' file could be found. If you are using a custom config file name ' +
            //   'or it is located outside of your project, please go to preferences and set the desired file. ' +
            //   'Otherwise, you can safely ignore this message and default Tailwind classes will be provided.')
            console.log('No Tailwind configuration file found in the workspace.')
          }
        }
      }

      if (tailwindConfigPath !== null) {
        console.log('Configuration File Location:', tailwindConfigPath)
        tailwindConfigObject = await this.readConfigFile(tailwindConfigPath)

        if (tailwindConfigObject.theme.extend.colors) {
          let colors   = await this.readTailwindConfigColors(tailwindConfigObject)
          this._colors = [...this._colors, ...colors]
        }
      } else {
        console.log('No Configuration File Detected')
      }
    } catch (error) {
      FUNCTIONS.showConsoleError(error)
    }

    return
  }

  /*
    Attempts to read any extended colors in a customized Tailwind config file.
  */
  async readTailwindConfigColors(tailwindConfigObject) {
    let colors = []

    for (const [currentColorPrefix, value] of Object.entries(tailwindConfigObject.theme.extend.colors)) {
      for (const [colorKey, colorValue] of Object.entries(value)) {
        colors.push(
          {
            name: `${currentColorPrefix}-${colorKey}`,
            hex:  colorValue,
            rgb:  FUNCTIONS.convertHexToRgbArray(colorValue).join(', ')
          }
        )
      }
    }

    return colors
  }
}

