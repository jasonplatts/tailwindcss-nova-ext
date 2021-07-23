# Tailwind CSS Extension for Panic's Nova Code Editor

Provides Tailwind CSS completions for Panic's macOS code editor, Nova.

<img src="https://user-images.githubusercontent.com/48892071/105522129-dacd1080-5caa-11eb-8ce9-dacd244de575.png" width="800" alt="Tailwind CSS Completion">

**Now includes a sidebar documentation!**

*The sidebar offers access to the Tailwind classes and associated documentation right from within Nova. It makes it easy
to learn about available Tailwind classes!*

Thank you to Tailwind Labs, Adam Wathan, and Steve Schoger for their contribution to the development community, including Tailwind CSS, Headless UI, and Tailwind UI. *This extension is not created, maintained, or endorsed by Tailwind Labs. To request features or report bugs, please see the section below.*

## Prerequisites

There are no prerequisites for this extension, other than Panic's Nova code editor for macOS.

## Usage

Enable the extension in the extension library within Nova.

## Configuration

The extension does not require a local installation of Tailwind, therefore, it will also function when using Tailwind via CDN.

The Tailwind CSS extension will always provide default Tailwind CSS classes. However, for projects where Tailwind has been customized, the extension will perform these these actions in order:
1. Attempt to read the Tailwind configuration file specified in the workspace preferences (see screenshot below).
2. Search the workspace for a 'tailwind.config.js' file and attempt to read it.

**As of version 3.0, the extension only supports customized extended colors. Support for additional customizations is coming!**

It is not necessary to include a Tailwind installation in the project, nor include a 'tailwind.config.js' file for default class suggestions.

### Workspace Configuration
To specify a Tailwind configuration file, go to the workspace preferences, select Tailwind CSS, and choose a file. Simply delete the path if you wish to for the extension to automatically find and include the 'tailwind.config.js' file again.

<img src="https://user-images.githubusercontent.com/48892071/126839223-b50d6943-04cb-42a8-b58e-bba7f9daaaa1.png" width="800" alt="Tailwind CSS Workspace Preferences">

## Planned Future Features

* Improved support for Tailwind CSS customization.
* CSS/Sass file support.

## Report a Bug or Feature Request

To report a bug or request a feature, please add an issue to the GitHub repository. Thanks!
