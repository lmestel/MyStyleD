const path = require("node:path");
const fs = require("fs-extra");
const svgstore = require("svgstore");
const HTMLtoJSX = require("htmltojsx");

const createIconSprite = async (srcDir, destDir) => {
  const converter = new HTMLtoJSX({ createClass: false });
  const sprite = svgstore({
    svgAttrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      hidden: "",
      height: "0",
      width: "0",
    },
  });
  const filePaths = await fs.readdir(srcDir);
  await Promise.all(
    filePaths.map(async (filePath) => {
      const file = await fs.readFile(path.join(srcDir, filePath));
      sprite.add(`icon-${path.basename(filePath, ".svg")}`, file);
    })
  );

  const html = sprite.toString({ inline: true });
  const jsx = converter.convert(html);

  await Promise.all([
    fs.writeFile(path.join(destDir, "icon-sprite.html"), html),
    fs.writeFile(path.join(destDir, "IconSprite.jsx"), `export default () => (${jsx})`),
  ]);
};

module.exports = createIconSprite;

(async () => {
  createIconSprite("tokens/icons", "dest")
})();
