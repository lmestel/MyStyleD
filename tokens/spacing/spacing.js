const precision = require("../../helper/precision")(4);
const ms = require("../../helper/modular-scale");

const category = "size";
const baseScale = ms(0.5, 1.618);
const breakpoints = ["s", "m", "xl"];

const responsive = (base) => {
  const responsiveScale = ms(base, 1.414);
  return {
    _: {
      value: precision(responsiveScale(0)),
      attributes: { category },
    },
    ...Object.fromEntries(
      breakpoints.map((breakpoint, index) => [
        breakpoint,
        {
          value: precision(responsiveScale(index + 1)),
          attributes: { category, media: `{media.${breakpoint}.value}` },
        },
      ])
    ),
  };
};

module.exports = {
  spacing: {
    xxs: responsive(baseScale(-3)),
    xs: responsive(baseScale(-2)),
    s: responsive(baseScale(-1)),
    m: responsive(baseScale(0)),
    l: responsive(baseScale(1)),
    xl: responsive(baseScale(2)),
    xxl: responsive(baseScale(3)),
  },
};
