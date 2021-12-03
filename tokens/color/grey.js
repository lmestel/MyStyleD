const { mix } = require("../../helper/color");

module.exports = {
  color: {
    ...mix("grey", "white", "black"),
  },
};
