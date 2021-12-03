const category = "size";

module.exports = {
  "font-size": {
    xs: {
      _: { value: 0.75, attributes: { category } },
    },
    s: {
      _: { value: 0.875, attributes: { category } },
      s: { value: 0.9375, attributes: { category, media: "{media.s.value}" } },
    },
    m: {
      _: { value: 1, attributes: { category } },
      s: { value: 1.125, attributes: { category, media: "{media.s.value}" } },
    },
    l: {
      _: { value: 1.125, attributes: { category } },
      s: { value: 1.3125, attributes: { category, media: "{media.s.value}" } },
    },
    xl: {
      _: { value: 1.5, attributes: { category } },
      s: { value: 1.75, attributes: { category, media: "{media.s.value}" } },
      m: { value: 2, attributes: { category, media: "{media.m.value}" } },
    },
    xxl: {
      _: { value: 1.875, attributes: { category } },
      s: { value: 2.25, attributes: { category, media: "{media.s.value}" } },
      m: { value: 2.875, attributes: { category, media: "{media.m.value}" } },
    },
  },
};
