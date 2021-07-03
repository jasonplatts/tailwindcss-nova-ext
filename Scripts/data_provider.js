'use strict'

/*
  Class contains the DataProvider functionality. Due to limitations in the Nova API
  at time of writing, the TreeView is not editable once part of the DataProvider.
*/
exports.DataProvider = class DataProvider {
  constructor(listItems) {
    this.rootItems = listItems
  }

  /*
    Returns the children tree item(s).
  */
  getChildren(listItem) {
    if (!listItem) {
      return this.rootItems
    } else {
      return listItem.children
    }
  }

  /*
    Returns the parent tree item.
  */
  getParent(listItem) {
    return listItem.parent
  }

  /*
    Converts a listItem object into a TreeItem object.
  */
  getTreeItem(listItem) {
    var item = new TreeItem(listItem.name)

    item.collapsibleState = listItem.collapsibleState
    item.command          = listItem.command
    item.color            = listItem.color
    item.contextValue     = listItem.contextValue
    item.descriptiveText  = listItem.descriptiveText
    item.identifier       = listItem.identifier
    item.image            = listItem.image
    item.path             = listItem.path
    item.tooltip          = listItem.tooltip

    return item
  }
}
