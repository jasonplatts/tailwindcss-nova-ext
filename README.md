# Tailwind CSS Extension for Panic's Nova Code Editor

Provides Tailwind CSS (v1.x) class completions for Panic's macOS code editor, Nova.

<img src="https://user-images.githubusercontent.com/48892071/95874998-875c3580-0d3f-11eb-879b-1171e1ce459a.png" width="800" alt="Example Tailwind CSS Completion">

Thank you to Tailwind Labs, Adam Wathan, and Steve Schroger for their contribution to the development community, including Tailwind CSS, Headless UI, and Tailwind UI. *This extension is not created, maintained, or endorsed by Tailwind Labs. To request features or report bugs, please see the section below.*

## Prerequisites

There are no prerequisites for this extension other than Panic's Nova code editor for macOS. This extension does not depend on Tailwind being installed locally within a project, so it will also work when using the Tailwind CSS CDN.

## Usage

Enable the extension in the extension library within Nova.

## Known Issues

* Autocomplete suggestions of class names that contain hyphens are not the most relevant after the user has typed past the first hyphen. This has to do with the type being parsed into separate words based on where hyphens are present and a current limitation of the Nova JavaScript API.
* The extension does not currently work in any files, other than HTML.
* Autocompletion of customizations haven't yet been added.

## Report a Bug or Feature Request

To report a bug or request a feature, please add an issue to the GitHub repository. Thanks!
