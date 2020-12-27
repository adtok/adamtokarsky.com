const withMdxEnhanced = require("next-mdx-enhanced");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const rehypePrism = require("@mapbox/rehype-prism");

const tokenClassNames = {
  tag: "text-code-red",
  "attr-name": "text-code-yellow",
  "attr-value": "text-code-green",
  deleted: "text-code-red",
  inserted: "text-code-green",
  punctuation: "text-code-white",
  keyword: "text-code-purple",
  string: "text-code-green",
  function: "text-code-blue",
  boolean: "text-code-red",
  comment: "text-gray-400 italic",
};

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex, rehypePrism],
})({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
