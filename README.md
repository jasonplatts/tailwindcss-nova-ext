# Panic Nova Tailwind CSS Autocomplete Extension

This repository contains the Tailwind CSS autocomplete extension for Nova, Panic's code editor for macOS. Its functionality includes autocomplete for Tailwind CSS classes.

![Image of Extension](https://github.com/jasonplatts/tailwindcss-nova-ext/blob/master/Images/screenshots/screen-colors.jpeg)

## Prerequisites

There are no prerequisites for this extension other than the Nova editor, which is available only for macOS.

## Usage

Enable the extension in the extension library within Nova.

## Issues

* Autocomplete suggestions of class names that contain hyphens are not the most relevant after the user has typed past the first hyphen. This has to do with the type being parsed into separate words based on where hyphens are present and a current limitation of the Nova JavaScript API.
* Autocompletion of customizations have not yet been added.

## License

This extension is not created or officially endorsed by Tailwind Labs. It is entirely open source.