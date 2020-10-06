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

let classes = [];

classes = classes.concat(
  justifyContent
);

exports.classes = classes;