/*        TRANSITION PROPERTY CLASSES        */

let transitionProperty = [
  {
    label:"transition-none",
    detail:"transition-property: none;",
    documentation:"Remove all of an element's transition properties."
  },
  {
    label:"transition-all",
    detail:"transition-property: all;",
    documentation:"Set all of an element's properties to transition."
  },
  {
    label:"transition",
    detail:"transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;",
    documentation:"Set an element's background-color, border-color, color, fill, stroke, opacity, box-shadow, and transform properties to transition."
  },
  {
    label:"transition-colors",
    detail:"transition-property: background-color, border-color, color, fill, stroke;",
    documentation:"Set an element's background-color, border-color, color, fill, and stroke properties to transition."
  },
  {
    label:"transition-opacity",
    detail:"transition-property: opacity;",
    documentation:"Set an element's opacity property to transition."
  },
  {
    label:"transition-shadow",
    detail:"transition-property: box-shadow;",
    documentation:"Set an element's box shadow property to transition."
  },
  {
    label:"transition-transform",
    detail:"transition-property: transform;",
    documentation:"Set an element's transform properties to transition."
  }
];

/*        TRANSITION DURATION CLASSES        */

const TRANSITION_DURATIONS = [
  { name:"75"  , value:"75ms" },
  { name:"100" , value:"100ms" },
  { name:"150" , value:"150ms" },
  { name:"200" , value:"200ms" },
  { name:"300" , value:"300ms" },
  { name:"500" , value:"500ms" },
  { name:"700" , value:"700ms" },
  { name:"1000", value:"1000ms" }
];

let transitionDuration = [];

for(i = 0; i < TRANSITION_DURATIONS.length; i++) {
  transitionDuration.push(
    {
      label:`duration-${TRANSITION_DURATIONS[i].name}`,
      detail:`transition-duration: ${TRANSITION_DURATIONS[i].value};`,
      documentation:`Set an element's transition-duration to ${TRANSITION_DURATIONS[i].value}.`
    }
  );
}
  
let classes = [];

classes = classes.concat(
  transitionProperty,
  transitionDuration
);

exports.classes = classes;