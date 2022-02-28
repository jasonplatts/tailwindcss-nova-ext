## Version 4.2.1

* Fixed minor configuration error.

## Version 4.2

* Added "Toggle TailwindCSS" command to the Nova command palette. Thanks to Emran (https://github.com/EmranMR) for this contribution!

## Version 4.1

* Improved when autocompletions are suggested by preventing suggestions outside of HTML class attributes, CSS files, or single and double quotes in other files, such as ERB.
* Fixed an issue causing improper insertion of Tailwind directives.

## Version 4.0

* Added support for Tailwind version 3.0.15
* Updated Tailwind class icons to represent style classes, pseudo-classes and pseudo-elements.
* Added support for Tailwind functions and directives.

## Version 3.0.4

* Added completion support in css, sass, and scss files.
* Fixed a bug preventing Tailwind class completions on systems not supporting newer JavaScript versions.

## Version 3.0.3

* Fixed a bug preventing autocompletions from being offered immediately after an opening quote within a HTML class attribute.

## Version 3.0.2

* Changed the "whitespace-no-wrap" Tailwind class to the correct name, "whitespace-nowrap".

## Version 3.0.1

* Fixed bug causing inconsistent reloading of the Tailwind classes when the Tailwind config file is saved.

## Version 3.0

* Added sidebar for viewing available Tailwind classes.
* Added support for Tailwind version 2.2.4.
* Added support for tailwind.config.js customization of extended colors.
* Improved Tailwind completion support in Vue.js projects by disallowing completions in script blocks and allowing completions in a style block when the @apply directive is used.
* Removed support for older versions of Tailwind to focus on current and future extension feature enhancements.

## Version 2.2

* Added support for jade and pug files.

## Version 2.1

* Added support for embedded Elixir files.

## Version 2.0.1

* Fixed issue with causing some classes to display undefined values.

## Version 2.0

* Added Tailwind CSS 2.0 support.
* Added support for changing the Tailwind CSS version in the workspace preferences.
* Increased the quality of the extension icon.

## Version 1.3

* Added support for Liquid files.

## Version 1.2

* Added support for Twig, Blade, and Svelte files.

## Version 1.1

* Fixed issue causing extension to stop responding when at the beginning of a line.
* Added a minimum supported Nova 2.0 runtime requirement. Nova 2.0 addresses an issue that can cause less accurate autocomplete suggestions.

## Version 1.0

Initial release
