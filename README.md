# Panic Nova Tailwind CSS Autocomplete Extension

This repository contains the Tailwind CSS autocomplete extension for Nova, Panic's code editor for macOS. Its functionality includes autocomplete for Tailwind CSS classes.

![Image of Extension](https://github.com/jasonplatts/tailwindcss-nova-ext/blob/master/Images/screenshots/screen-colors.jpeg)

## Prerequisites

There are no prerequisites for this extension other than the Nova editor, which is available only for macOS.

## Usage

Enable the extension in the extension library within Nova.

## Issues

* Autocomplete suggestions of class names that contain hyphens are not the most relevant after the user has typed past the first hyphen. This has to do with the type being parsed into separate words based on where hyphens are present.
* Autocompletion of customizations have not yet been added.

## Future Plans

This extension does not currently work the same way as the VS Code Tailwind extension, which uses a language server and requires a functioning installation of Tailwind within the active project. Therefore, there is currently no processing of customizations. This will likely be added to a future update.


## License

This extension is not created or officially endorsed by Tailwind Labs.