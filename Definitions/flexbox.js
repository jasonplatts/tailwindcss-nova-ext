let flexDirection = [
  {
    label:"flex-row",
    detail:"flex-direction: row;",
    documentation:"Positions flex items horizontally in the same direction as text."
  },
  {
    label:"flex-row-reverse",
    detail:"flex-direction: row-reverse;",
    documentation:"Positions flex items horizontally in the opposite direction."
  },
  {
    label:"flex-col",
    detail:"flex-direction: column;",
    documentation:"Positions flex items vertically."
  },
  {
    label:"flex-col-reverse",
    detail:"flex-direction: column-reverse;",
    documentation:"Positions flex items vertically in the opposite direction."
  }
];

let flexWrap = [
  {
    label:"flex-wrap",
    detail:"flex-wrap: wrap;",
    documentation:"Allows flex items to wrap."
  },
  {
    label:"flex-wrap-reverse",
    detail:"flex-wrap: wrap-reverse;",
    documentation:"Wraps flex items in the reverse direction."
  },
  {
    label:"flex-no-wrap",
    detail:"flex-wrap: nowrap;",
    documentation:"Prevents flex items from wrapping, causing items to overflow their container when necessary."
  }
];

let flex = [
  {
    label:"flex-1",
    detail:"flex: 1 1 0%;",
    documentation:"Allows a flex item to grow and shrink as needed. Initial element size is ignored."
  },
  {
    label:"flex-auto",
    detail:"flex: 1 1 auto;",
    documentation:"Allows a flex item to grow and shrink. Initial element size is considered."
  },
  {
    label:"flex-initial",
    detail:"flex: 0 1 auto;",
    documentation:"Allows a flex item to shrink, but not grow. Initial element size is considered."
  },
  {
    label:"flex-none",
    detail:"flex: none;",
    documentation:"Prevents a flex item from growing or shrinking."
  }
];

let flexGrow = [
  {
    label:"flex-grow-0",
    detail:"flex-grow: 0;",
    documentation:"Allows a flex item to grow to fill available space."
  },
  {
    label:"flex-grow",
    detail:"flex-grow: 1;",
    documentation:"Prevents a flex item from growing to fill available space."
  }
];

let classes = [];

classes = classes.concat(
  flexDirection,
  flexWrap,
  flex,
  flexGrow
);

exports.classes = classes;