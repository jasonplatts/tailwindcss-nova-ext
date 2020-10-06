# Panic Nova Tailwind CSS Completions Extension

Provides Tailwind CSS class completions for Panic's macOS code editor, Nova.

<img src="https://user-images.githubusercontent.com/48892071/95214713-2de38c00-07be-11eb-86b2-cdd2a404600c.jpeg" width="400" alt="Example Tailwind CSS Completion">

## Prerequisites

There are no prerequisites for this extension other than Panic's Nova code editor for macOS. This extension does not depend on Tailwind being installed locally within a project, so it will work when using the Tailwind CSS CDN.

## Usage

Enable the extension in the extension library within Nova.

## Known Issues

* Autocomplete suggestions of class names that contain hyphens are not the most relevant after the user has typed past the first hyphen. This has to do with the type being parsed into separate words based on where hyphens are present and a current limitation of the Nova JavaScript API.
* Autocompletion of customizations haven't yet been added.
