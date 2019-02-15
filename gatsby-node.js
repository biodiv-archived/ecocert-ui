/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        ".@components": path.resolve(__dirname, "./src/components"),
        ".@images": path.resolve(__dirname, "./src/images"),
        ".@interfaces": path.resolve(__dirname, "./src/interfaces"),
        ".@modules": path.resolve(__dirname, "./src/modules"),
        ".@pages": path.resolve(__dirname, "./src/pages"),
        ".@styles": path.resolve(__dirname, "./src/styles"),
        ".@utils": path.resolve(__dirname, "./src/utils")
      }
    }
  });
};
