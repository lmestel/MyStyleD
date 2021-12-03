const category = "size";

module.exports = {
  "line-height": {
    xs: {
      _: { value: 1, attributes: { category } },
    },
    s: {
      _: { value: 1.5, attributes: { category } },
    },
    m: {
      _: { value: 1.75, attributes: { category } },
      s: { value: 2, attributes: { category, media: "{media.s.value}" } },
    },
    l: {
      _: { value: 2, attributes: { category } },
      s: { value: 2.5, attributes: { category, media: "{media.s.value}" } },
    },
    xl: {
      _: { value: 2.25, attributes: { category } },
      m: { value: 3, attributes: { category, media: "{media.m.value}" } },
    },
    xxl: {
      _: { value: 2.5, attributes: { category } },
      s: { value: 3, attributes: { category, media: "{media.s.value}" } },
      m: { value: 4, attributes: { category, media: "{media.m.value}" } },
    },
  },
};
