const config = require("./config");
const StyleDictionary = require("style-dictionary");
const { fileHeader, createPropertyFormatter } = StyleDictionary.formatHelpers;

StyleDictionary.extend(config)
  .registerFormat({
    name: "css/json",
    formatter({ dictionary, options }) {
      const { outputReferences, selector = ":root" } = options;
      const tokens = dictionary.allTokens.reduce((prev, token) => {
        let { name } = token;
        const queryMatch = /{media\.(\w+)\.value}/.exec(
          token.original.attributes?.media
        );
        if (queryMatch) {
          name = token.name.replace(RegExp(`-${queryMatch[1]}$`), "");
        }

        // TODO: respect outputReferences
        prev[name] ??= [];
        prev[name].push({
          value: token.value,
          selector,
          media: token.attributes?.media,
        });
        return prev;
      }, {});

      return JSON.stringify(tokens, null, 2);
    },
  })
  .registerFormat({
    name: "css/variables-with-media-queries",
    formatter({ dictionary, file, options }) {
      const { outputReferences, selector = ":root" } = options;
      const propertyFormatter = createPropertyFormatter({
        outputReferences,
        dictionary,
        format: "css",
        formatting: {},
        themeable: false,
      });

      const groupedTokens = dictionary.allTokens.reduce((prev, t) => {
        const token = { ...t };
        const breakpoint = token.attributes?.media ?? "_";
        prev[breakpoint] ??= [];

        const queryMatch = /{media\.(\w+)\.value}/.exec(
          token.original.attributes?.media
        );
        if (queryMatch) {
          token.name = token.name.replace(RegExp(`-${queryMatch[1]}$`), "");
        }

        prev[breakpoint].push(token);
        return prev;
      }, {});

      const tokens = (bp) =>
        `${selector} {\n${groupedTokens[bp]
          .map(propertyFormatter)
          .filter(Boolean)
          .join("\n")}\n}`;

      return (
        fileHeader({ file }) +
        Object.keys(groupedTokens)
          .map((query) =>
            query === "_"
              ? tokens(query) + "\n"
              : `@media ${query} {\n${tokens(query)}\n}`
          )
          .join("")
      );
    },
  })
  .buildAllPlatforms();
