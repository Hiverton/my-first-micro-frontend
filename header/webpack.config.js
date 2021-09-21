const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-angular");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "header",
    projectName: "blg",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {});
};
