let currentColorPrefix;

currentColorPrefix = "gray-";

const GRAY = [
  {
    class:currentColorPrefix + "100",
    value:"f7fafc"
  },
  {
    class:currentColorPrefix + "200",
    value:"edf2f7"
  },
  {
    class:currentColorPrefix + "300",
    value:"e2e8f0"
  },
  {
    class:currentColorPrefix + "400",
    value:"cbd5e0"
  },
  {
    class:currentColorPrefix + "500",
    value:"a0aec0"
  },
  {
    class:currentColorPrefix + "600",
    value:"718096"
  },
  {
    class:currentColorPrefix + "700",
    value:"4a5568"
  },
  {
    class:currentColorPrefix + "800",
    value:"2d3748"
  },
  {
    class:currentColorPrefix + "900",
    value:"1a202c"
  }
];

currentColorPrefix = "red-";

const RED = [
  {
    class:currentColorPrefix + "100",
    value:"fff5f5"
  },
  {
    class:currentColorPrefix + "200",
    value:"fed7d7"
  },
  {
    class:currentColorPrefix + "300",
    value:"feb2b2"
  },
  {
    class:currentColorPrefix + "400",
    value:"fc8181"
  },
  {
    class:currentColorPrefix + "500",
    value:"f56565"
  },
  {
    class:currentColorPrefix + "600",
    value:"e53e3e"
  },
  {
    class:currentColorPrefix + "700",
    value:"c53030"
  },
  {
    class:currentColorPrefix + "800",
    value:"9b2c2c"
  },
  {
    class:currentColorPrefix + "900",
    value:"742a2a"
  }
];

currentColorPrefix = "orange-";

const ORANGE = [
  {
    class:currentColorPrefix + "100",
    value:"fffaf0"
  },
  {
    class:currentColorPrefix + "200",
    value:"feebc8"
  },
  {
    class:currentColorPrefix + "300",
    value:"fbd38d"
  },
  {
    class:currentColorPrefix + "400",
    value:"f6ad55"
  },
  {
    class:currentColorPrefix + "500",
    value:"ed8936"
  },
  {
    class:currentColorPrefix + "600",
    value:"dd6b20"
  },
  {
    class:currentColorPrefix + "700",
    value:"c05621"
  },
  {
    class:currentColorPrefix + "800",
    value:"9c4221"
  },
  {
    class:currentColorPrefix + "900",
    value:"7b341e"
  }
];

const TEMP = [
  {
    class:currentColorPrefix + "100",
    value:""
  },
  {
    class:currentColorPrefix + "200",
    value:""
  },
  {
    class:currentColorPrefix + "300",
    value:""
  },
  {
    class:currentColorPrefix + "400",
    value:""
  },
  {
    class:currentColorPrefix + "500",
    value:""
  },
  {
    class:currentColorPrefix + "600",
    value:""
  },
  {
    class:currentColorPrefix + "700",
    value:""
  },
  {
    class:currentColorPrefix + "800",
    value:""
  },
  {
    class:currentColorPrefix + "900",
    value:""
  }
];

let colors = [];

colors = colors.concat(
  GRAY,
  RED,
  ORANGE
);

exports.COLORS = colors;