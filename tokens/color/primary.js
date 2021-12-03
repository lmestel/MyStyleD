const { alpha, lighter, darker } = require("../../helper/color");

module.exports = {
  color: {
    primary: {
      r: { value: "51", attributes: { category: null } },
      g: { value: "51", attributes: { category: null } },
      b: { value: "51", attributes: { category: null } },
      _: {
        value:
          "rgb({color.primary.r.value},{color.primary.g.value},{color.primary.b.value})",
      },
      ...alpha("primary"),
      ...lighter("primary"),
      ...darker("primary"),
    },
  },
};
