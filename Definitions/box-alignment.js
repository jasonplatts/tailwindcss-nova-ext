let justifyContent = [
  {
    label:"justify-start",
    detail:"justify-content: flex-start;",
    documentation:"Justify flex items against the start of the container's main axis."
  },
  {
    label:"justify-end",
    detail:"justify-content: flex-end;",
    documentation:"Justify flex items against the end of the container's main axis."
  },
  {
    label:"justify-center",
    detail:"justify-content: center;",
    documentation:"Justify flex items along the center of the container's main axis."
  },
  {
    label:"justify-between",
    detail:"justify-content: space-between;",
    documentation:"Distribute flex items along the container's main axis so as there is equal space between each item."
  },
  {
    label:"justify-around",
    detail:"justify-content: space-around;",
    documentation:"Distribute flex items along the container's main axis so as there is equal space on the sides of each item."
  },
  {
    label:"justify-evenly",
    detail:"justify-content: space-evenly;",
    documentation:"Distribute flex items along the container's main axis so as there is equal space between each item and the start and end edge."
  },
];

let justifyItems = [
  {
    label:"justify-items-auto",
    detail:"justify-items: auto;",
    documentation:"Automatically justify grid items based on their parent container. If no parent or it is absolutely positioned, auto represents normal."
  },
  {
    label:"justify-items-start",
    detail:"justify-items: start;",
    documentation:"Justify grid items toward the starting edge of their inline axis."
  },
  {
    label:"justify-items-end",
    detail:"justify-items: end;",
    documentation:"Justify grid items toward the ending edge of their inline axis."
  },
  {
    label:"justify-items-center",
    detail:"justify-items: center;",
    documentation:"Justify grid items along their inline axis."
  },
  {
    label:"justify-items-stretch",
    detail:"justify-items: stretch;",
    documentation:"Stretch items along their inline axis if the combined size of items is less than the size of their container."
  },
];

let classes = [];

classes = classes.concat(
  justifyContent,
  justifyItems
);

exports.classes = classes;