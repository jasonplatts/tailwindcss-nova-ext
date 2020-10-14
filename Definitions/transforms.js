/*        SCALE CLASSES        */
const SCALES = [
  { name:"0",   value:"0" },
  { name:"50",  value:".5" },
  { name:"75",  value:".75" },
  { name:"90",  value:".9" },
  { name:"95",  value:".95" },
  { name:"100", value:"1" },
  { name:"105", value:"1.05" },
  { name:"110", value:"1.1" },
  { name:"125", value:"1.25" },
  { name:"150", value:"1.5" },
];

let scale = [];

for(i = 0; i < SCALES.length; i++) {
  scale.push(
    {
      label:`scale-${SCALES[i].name}`,
      detail:`--transform-scale-x: ${SCALES[i].value}; --transform-scale-y: ${SCALES[i].value};`,
      documentation:`Sets an element's scale x and y percentages to ${SCALES[i].value}. The transform utility must first be specified.`
    },
    {
      label:`scale-x-${SCALES[i].name}`,
      detail:`--transform-scale-x: ${SCALES[i].value};`,
      documentation:`Sets an element's scale x percentages to ${SCALES[i].value}. The transform utility must first be specified.`
    },
    {
      label:`scale-y-${SCALES[i].name}`,
      detail:`--transform-scale-y: ${SCALES[i].value};`,
      documentation:`Sets an element's scale y percentage to ${SCALES[i].value}. The transform utility must first be specified.`
    }
  )
}

/*        ROTATE CLASSES        */

const ROTATE_SCALE = [
  { name:"1",   value:"1deg" },
  { name:"2",   value:"2deg" },
  { name:"3",   value:"3deg" },
  { name:"6",   value:"6deg" },
  { name:"12",  value:"12deg" },
  { name:"45",  value:"45deg" },
  { name:"90",  value:"90deg" },
  { name:"180", value:"180deg" }
];

let rotate = [];

rotate.push(
  {
    label:`rotate-0`,
    detail:`--transform-rotate: 0;`,
    documentation:`Set an element's rotation angle to 0. The transform utility must first be used.`
  }
);

for(i = 0; i < ROTATE_SCALE.length; i++) {
  rotate.push(
    {
      label:`rotate-${ROTATE_SCALE[i].name}`,
      detail:`--transform-rotate: ${ROTATE_SCALE[i].value};`,
      documentation:`Set an element's rotation angle to ${ROTATE_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`-rotate-${ROTATE_SCALE[i].name}`,
      detail:`--transform-rotate: -${ROTATE_SCALE[i].value};`,
      documentation:`Set an element's rotation angle to -${ROTATE_SCALE[i].value}. The transform utility must first be used.`
    }
  );
}

/*        TRANSLATE CLASSES        */

const TRANSLATE_SCALE = [
  { name:"0",    value:"0rem" },
  { name:"1",    value:"0.25rem" },
  { name:"2",    value:"0.5rem" },
  { name:"3",    value:"0.75rem" },
  { name:"4",    value:"1rem" },
  { name:"5",    value:"1.25rem" },
  { name:"6",    value:"1.5rem" },
  { name:"8",    value:"2rem" },
  { name:"10",   value:"2.5rem" },
  { name:"12",   value:"3rem" },
  { name:"16",   value:"4rem" },
  { name:"20",   value:"5rem" },
  { name:"24",   value:"6rem" },
  { name:"32",   value:"8rem" },
  { name:"40",   value:"10rem" },
  { name:"48",   value:"12rem" },
  { name:"56",   value:"14rem" },
  { name:"64",   value:"16rem" },
  { name:"px",   value:"1px" },
  { name:"full", value:"100%" },
  { name:"1/2",  value:"50%" }
];

let translate = [];

for(i = 0; i < TRANSLATE_SCALE.length; i++) {
  translate.push(
    {
      label:`translate-x-${TRANSLATE_SCALE[i].name}`,
      detail:`--transform-translate-x: ${TRANSLATE_SCALE[i].value};`,
      documentation:`Set an element's x axis translate amount to ${TRANSLATE_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`-translate-x-${TRANSLATE_SCALE[i].name}`,
      detail:`--transform-translate-x: -${TRANSLATE_SCALE[i].value};`,
      documentation:`Set an element's x axis translate amount to -${TRANSLATE_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`translate-y-${TRANSLATE_SCALE[i].name}`,
      detail:`--transform-translate-y: ${TRANSLATE_SCALE[i].value};`,
      documentation:`Set an element's y axis translate amount to ${TRANSLATE_SCALE[i].value}. The transform utility must first be used.`
    },
    {
      label:`-translate-y-${TRANSLATE_SCALE[i].name}`,
      detail:`--transform-translate-y: -${TRANSLATE_SCALE[i].value};`,
      documentation:`Set an element's y axis translate amount to -${TRANSLATE_SCALE[i].value}. The transform utility must first be used.`
    }
  );
}

let classes = [];
  
classes = classes.concat(
  scale,
  rotate,
  translate
);

exports.classes = classes;