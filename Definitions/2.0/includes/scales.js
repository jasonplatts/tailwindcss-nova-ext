const BREAKPOINTS = [
  { name:"sm", desc:"small", value:"640px" },
  { name:"md", desc:"medium", value:"768px" },
  { name:"lg", desc:"large", value:"1024px" },
  { name:"xl", desc:"extra large", value:"1280px" },
  { name:"2xl", desc:"2 extra large", value:"1536px" }
];

const DEFAULT_SPACING_SCALE = [
  { name:"0", value:"0px" },
  { name:"px", value:"1px" },
  { name:"0.5", value:"0.125rem" },
  { name:"1", value:"0.25rem" },
  { name:"1.5", value:"0.375rem" },
  { name:"2", value:"0.5rem" },
  { name:"2.5", value:"0.625rem" },
  { name:"3", value:"0.75rem" },
  { name:"3.5", value:"0.875rem" },
  { name:"4", value:"1rem" },
  { name:"5", value:"1.25rem" },
  { name:"6", value:"1.5rem" },
  { name:"7", value:"1.75rem" },
  { name:"8", value:"2rem" },
  { name:"9", value:"2.25rem" },
  { name:"10", value:"2.5rem" },
  { name:"11", value:"2.75rem" },
  { name:"12", value:"3rem" },
  { name:"14", value:"3.5rem" },
  { name:"16", value:"4rem" },
  { name:"20", value:"5rem" },
  { name:"24", value:"6rem" },
  { name:"28", value:"7rem" },
  { name:"32", value:"8rem" },
  { name:"36", value:"9rem" },
  { name:"40", value:"10rem" },
  { name:"44", value:"11rem" },
  { name:"48", value:"12rem" },
  { name:"52", value:"13rem" },
  { name:"56", value:"14rem" },
  { name:"60", value:"15rem" },
  { name:"64", value:"16rem" },
  { name:"72", value:"18rem" },
  { name:"80", value:"20rem" },
  { name:"96", value:"24rem" }
];

const CORE_DEFAULT_FRACTIONAL_SCALE = [
  { name:"1/2", value:"50%" },
  { name:"1/3", value:"33.333333%" },
  { name:"2/3", value:"66.666667%" },
  { name:"1/4", value:"25%" },
  { name:"2/4", value:"50%" },
  { name:"3/4", value:"75%" },
  { name:"full", value:"100%" }
];

const FIFTHS_FRACTIONAL_SCALE = [
  { name:"1/5", value:"20%" },
  { name:"2/5", value:"40%" },
  { name:"3/5", value:"60%" },
  { name:"4/5", value:"80%" }
];

const SIXTHS_FRACTIONAL_SCALE = [
  { name:"1/6", value:"16.666667%" },
  { name:"2/6", value:"33.333333%" },
  { name:"3/6", value:"50%" },
  { name:"4/6", value:"66.666667%" },
  { name:"5/6", value:"83.333333%" }
];

const TWELFTHS_FRACTIONAL_SCALE = [
  { name:"1/12", value:"8.333333%" },
  { name:"2/12", value:"16.666667%" },
  { name:"3/12", value:"25%" },
  { name:"4/12", value:"33.333333%" },
  { name:"5/12", value:"41.666667%" },
  { name:"6/12", value:"50%" },
  { name:"7/12", value:"58.333333%" },
  { name:"8/12", value:"66.666667%" },
  { name:"9/12", value:"75%" },
  { name:"10/12", value:"83.333333%" },
  { name:"11/12", value:"91.666667%" }
];

exports.BREAKPOINTS = BREAKPOINTS
exports.DEFAULT_SPACING_SCALE = DEFAULT_SPACING_SCALE
exports.CORE_DEFAULT_FRACTIONAL_SCALE = CORE_DEFAULT_FRACTIONAL_SCALE
exports.FIFTHS_FRACTIONAL_SCALE = FIFTHS_FRACTIONAL_SCALE
exports.SIXTHS_FRACTIONAL_SCALE = SIXTHS_FRACTIONAL_SCALE
exports.TWELFTHS_FRACTIONAL_SCALE = TWELFTHS_FRACTIONAL_SCALE
