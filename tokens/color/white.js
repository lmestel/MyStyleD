const { alpha } = require("../../helper/color");

module.exports = {
  color: {
    white: {
      r: { value: "255", attributes: { category: null } },
      g: { value: "255", attributes: { category: null } },
      b: { value: "255", attributes: { category: null } },
      _: {
        value:
          "rgb({color.white.r.value},{color.white.g.value},{color.white.b.value})",
      },
      ...alpha("white"),
    },
  },
};
