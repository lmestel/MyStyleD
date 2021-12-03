const options = {
  outputReferences: true,
};
function filter(token) {
  return !token.attributes || !token.attributes.ignore;
}

module.exports = {
  source: ["tokens/**/*.js"],
  platforms: {
    css: {
      transformGroup: "css",
      files: [
        {
          format: "css/variables",
          destination: "dest/variables-flat.css",
          options,
          filter,
        },
        {
          format: "css/variables-with-media-queries",
          destination: "dest/variables.css",
          options,
          filter,
        },
        {
          format: "css/json",
          destination: "dest/tokens.json",
          options,
          filter,
        },
      ],
    },
  },
};
