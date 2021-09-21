const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;



module.exports = {
  externals: ['@blg/header'],
}
(config, options) => {

  
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
