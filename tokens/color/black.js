const { alpha } = require("../../helper/color");

module.exports = {
  color: {
    black: {
      r: {
        value: "calc({color.primary.r.value} * 0.1)",
        attributes: { category: null },
      },
      g: {
        value: "calc({color.primary.g.value} * 0.1)",
        attributes: { category: null },
      },
      b: {
        value: "calc({color.primary.b.value} * 0.1)",
        attributes: { category: null },
      },
      _: {
        value:
          "rgb({color.black.r.value},{color.black.g.value},{color.black.b.value})",
      },
      ...alpha("black"),
    },
  },
};
