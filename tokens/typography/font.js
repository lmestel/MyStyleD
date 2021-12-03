module.exports = {
  font: Object.fromEntries(
    ["display", "copy", "ui"].map((style) => [
      style,
      Object.fromEntries(
        ["xs", "s", "l", "m", "xl", "xxl"].map((scale) => [
          scale,
          {
            value: `{font-size.${scale}._.value} / calc({line-height.${scale}._.value} * {line-height-factor.${style}.value}) {font-family.${style}.value}`,
          },
        ])
      ),
    ])
  ),
};
