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

let classes = [];
  
classes = classes.concat(
  scale
);

exports.classes = classes;