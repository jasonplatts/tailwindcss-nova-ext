/*        BOX SHADOW CLASSES        */

let boxShadow = [
  {
    label:"shadow-xs",
    detail:"box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);",
    documentation:"Apply the xs outer box shadow to an element."
  },
  {
    label:"shadow-sm",
    detail:"box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);",
    documentation:"Apply the sm box shadow to an element."
  },
  {
    label:"shadow",
    detail:"box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);",
    documentation:"Apply the normal outer box shadow to an element."
  },
  {
    label:"shadow-md",
    detail:"box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);",
    documentation:"Apply the md outer box shadow to an element."
  },
  {
    label:"shadow-lg",
    detail:"box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);",
    documentation:"Apply the lg outer box shadow to an element."
  },
  {
    label:"shadow-xl",
    detail:"box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);",
    documentation:"Apply the xl outer box shadow to an element."
  },
  {
    label:"shadow-2xl",
    detail:"box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);",
    documentation:"Apply the 2xl outer box shadow to an element."
  },
  {
    label:"shadow-inner",
    detail:"box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);",
    documentation:"Apply a subtle inset box shadow to an element. Useful for form controls or wells."
  },
  {
    label:"shadow-outline",
    detail:"box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);",
    documentation:"Apply a focus-ring-style shadow to an element. Combine with focus:outline-none for a style that follows the border radius."
  },
  {
    label:"shadow-none",
    detail:"box-shadow: none;",
    documentation:"Remove any existing box shadow styling on an element."
  },
];

/*        OPACITY CLASSES        */

const OPACITIES = [
  { name:"0",   value:"0" },
  { name:"25",  value:"0.25" },
  { name:"50",  value:"0.5" },
  { name:"75",  value:"0.75" },
  { name:"100", value:"1" },
];

let opacity = [];

for(i = 0; i < OPACITIES.length; i++) {
  opacity.push(
    {
      label:`opacity-${OPACITIES[i].name}`,
      detail:`opacity: ${OPACITIES[i].value};`,
      documentation:`Set the opacity of an element to ${OPACITIES[i].value}.`
    }
  );
}

let classes = [];

classes = classes.concat(
  boxShadow,
  opacity
);

exports.classes = classes;