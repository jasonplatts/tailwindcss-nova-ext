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

/*        TRANSITION TIMING FUNCTION CLASSES        */

let transitionTimingFunction = [
  {
    label:"ease-linear",
    detail:"transition-timing-function: linear;",
    documentation:"Set an element's easing curve to linear."
  },
  {
    label:"ease-in",
    detail:"transition-timing-function: cubic-bezier(0.4, 0, 1, 1);",
    documentation:"Set an element's easing curve to ease-in."
  },
  {
    label:"ease-out",
    detail:"transition-timing-function: cubic-bezier(0, 0, 0.2, 1);",
    documentation:"Set an element's easing curve to ease-out."
  },
  {
    label:"ease-in-out",
    detail:"transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    documentation:"Set an element's easing curve to ease-in-out."
  }
];

/*        TRANSITION DELAY CLASSES        */

const TRANSITION_DELAYS = [
  { name:"75"  , value:"75ms" },
  { name:"100" , value:"100ms" },
  { name:"150" , value:"150ms" },
  { name:"200" , value:"200ms" },
  { name:"300" , value:"300ms" },
  { name:"500" , value:"500ms" },
  { name:"700" , value:"700ms" },
  { name:"1000", value:"1000ms" }
];

let transitionDelay = [];

for(i = 0; i < TRANSITION_DELAYS.length; i++) {
  transitionDelay.push(
    {
      label:`delay-${TRANSITION_DELAYS[i].name}`,
      detail:`transition-delay: ${TRANSITION_DELAYS[i].value};`,
      documentation:`Set an element's transition-delay to ${TRANSITION_DELAYS[i].value}.`
    }
  );
}

/*        ANIMATION CLASSES        */

let animation = [
  {
    label:"animate-none",
    detail:"animation: none;",
    documentation:"Remove all of an element's CSS animations."
  },
  {
    label:"animate-spin",
    detail:"animation: spin 1s linear infinite;",
    documentation:"Add a linear spin animation to an element, such as a loading indicator."
  },
  {
    label:"animate-ping",
    detail:"animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;",
    documentation:"Set an element to scale and fade like a radar ping or ripple of water. Useful for things like notification badges."
  },
  {
    label:"animate-pulse",
    detail:"animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
    documentation:"Set an element to gently fade in and out. Useful for things like skeleton loaders."
  },
  {
    label:"animate-bounce",
    detail:"animation: bounce 1s infinite;",
    documentation:"Set an element to bounce up and down. Useful for things like \"sroll down\" indicators."
  }
];

let classes = [];

classes = classes.concat(
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
  animation
);

exports.classes = classes;