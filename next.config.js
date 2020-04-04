module.exports = {
  // https://github.com/developit/nextjs-preact-demo/pull/6/files
  experimental: {
    modern: true, // https://github.com/zeit/next.js/issues/7563
    polyfillsOptimization: true, // https://github.com/zeit/next.js/pull/10212
  },
  webpack(config, { dev, isServer }) {
    config = preactModifications({ config, dev, isServer });
    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
  target: "serverless", // https://zeit.co/docs/v2/serverless-functions/env-and-secrets?query=serverless#
};

// https://github.com/developit/nextjs-preact-demo/
function preactModifications({ config, dev, isServer }) {
  // const splitChunks = config.optimization && config.optimization.splitChunks;
  // if (splitChunks) {
  //   const cacheGroups = splitChunks.cacheGroups;
  //   const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
  //   if (cacheGroups.framework) {
  //     cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
  //       test: preactModules,
  //     });
  //     cacheGroups.commons.name = "framework";
  //   } else {
  //     cacheGroups.preact = {
  //       name: "commons",
  //       chunks: "all",
  //       test: preactModules,
  //     };
  //   }
  // }

  // inject Preact DevTools
  if (dev && !isServer) {
    const entry = config.entry;
    config.entry = () =>
      entry().then((entries) => {
        entries["main.js"] = ["preact/debug"].concat(entries["main.js"] || []);
        return entries;
      });
  }
  return config;
}
