'use strict'

/*        SCREEN READERS CLASSES        */

let screenReaders = [
  {
    label:'sr-only',
    detail:'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;',
    documentation:'Hide an element visually without hiding it from screen readers.'
  },
  {
    label:'not-sr-only',
    detail:'position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;',
    documentation:'Undo sr-only, making an element visible to sighted users as well as screen readers.'
  }
]

exports.accessibility = {
  screenReaders: screenReaders
}
