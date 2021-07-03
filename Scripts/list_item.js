'use strict'

exports.ListItem = class ListItem {
  constructor(name) {
    /*
      * name
        - The display name of the item, as a string.
      * collapsibleState
        - Defines how an item is displayed with regards to being expanded.
        - The default value is TreeItemCollapsibleState.None, which indicates the item cannot be expanded.
        - Valid values are:
          -- TreeItemCollapsibleState.None: the item cannot be expanded (it is a leaf item)
          -- TreeItemCollapsibleState.Collapsed: the item can be expanded, but is collapsed by default
          -- TreeItemCollapsibleState.Expanded: the item can be expanded, and is expanded by default
      * command
        - An optional Command to invoke when the item is double-clicked.
      * color
        - When set to a Color object, color will be rendered as a swatch in the item’s row in place of its image.
        - If both image and color are set on a tree item, the image will take priority.
      * contextValue
        - A value used when validating the when clause of commands for the tree view.
        - This value may be used for when clauses of the form viewItem == '<contextValue>'.
      * descriptiveText
        - A short description of the item, as a string.
        - This will be displayed alongside the item’s label, if space allows.
      * identifier
        - An optional unique identifier for the item, as a string.
        - This identifier must be unique across the entire tree.
        - This will be used to preserve selection and expansion state.
      * image
        - The name of an image to show for the item (see Images for more information).
        - If both image and color are set on a tree item, the image will take priority.
      * path
        - The file-system path to the item as a string, if appropriate.
        - If image is not specified, the default image will be the file-type icon for this path.
      * tooltip
        - A tooltip to display when hovering over the item, as a string.
    */
    this.name             = name
    this.collapsibleState = TreeItemCollapsibleState.None
    this.command          = 'tailwind.doubleClick'
    this.color            = null
    this.contextValue     = null
    this.descriptiveText  = ''
    this.identifier       = null
    this.image            = null
    this.path             = null
    this.tooltip          = ''

    this.children         = []
    this.parent           = null
  }

  addChild(element) {
    element.parent = this
    this.children  = [...this.children, element]
  }
}
