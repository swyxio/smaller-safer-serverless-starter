"use strict";

/**
 *
 *
 * LOCAL FORK OF next/babel - https://github.com/zeit/next.js/issues/11675
 */
// https://prettier.io/playground/#N4Igxg9gdgLgprEAuEAdEBXAznABFmAJwEswZ0BuSKA3BANwF4AHQiMOLLAOge4DkA8gBEAogH1R-AGpVotYlgAKbACYYyxaIwaM9AclYR1m6Prk0YuRcLj04AGwjMAtghg6oTA6ruPnbrDm1ApYACqcHroG8ATmAPTxuABKnBAO9vgwAJ4OcKoAtABWWAAeuMwOGADmxDSoUABmGFCmUFm5+QBSZYLMMFo0ABTOA-IAlMDEjUMAhKODWJOEcDAYhFDAAL4UW9NzAIKEhACG2dyKR6fZI-2L3JU1dUvLq+vtC-K7nzQPVbU0Rg-HiPAE8FwnZhDUF1RgAPimMyuZwuWGRNxhUHGkxCMAA2lATm4ADTAgC6LH+dQoKzWGzxKwAjhhiCtuCssOl7ENCW5xqS7vIybtae9cEyWWyOVy4NCqVjduMaW8NrhgbtErgwicANYIXCNNguXAACxgMGYWCQiVqMBNGAARtxIC54g6Tg7HG6PV6XS5iDB4qoAGwABjAAFY4ABGADsAGZgxGACzxk7BuAnMDJh0pgCcEYj8ZjodjJzz7rzwdjoYj0YAxKppo0Cg6c3BM6oABwnVR56MFxPRttF2Nh6NgMAAJinRanyWjEa7DWarTG7SwGGYzAghBgWAAyjATgMwKIDwBZIZgE4OPKEV50qCzWbX2-3vSMKAYO8AH1-N53nAhCfvQEDEKouChgA-GBEFQUggH3twm7bru+5HiepDnheSpbC4xg-nAvClDue5YIwQyQsQArrhR2zjPCwD0CchC4OIwIACSsJwqyiF4Fi0KhZH7jhjDUc677AUMwnoYex6njhSq4tYh7AfYIESUh0naSBcIvrpABkhm6aiB7qcBynyFYigXsYwFQOJzDEJJQGEG+bnwgZUmEMZpm2fZGxWZYqkADInKUdm+BsjABdFUD-kMQwcYKNDcRyfFeECqVYHihgZTABQMPoZKMXo35-r+KV0elvEwPx3iMHBkEwc1CHVYstU4PVXjcMehDVKsSzGcCeU8d1RVeCVfWsYN+68FgBHqHkFF6EQGBwIJVjjZl9AAMLQI0xDVIwwCagAku0dp4LEVgMKy0CBFYAAGS1EVgz2qWqjTwO0UAdr4kEwBAuCevgqy4MDkOEBtxKgz6DgGsd6ycJDJonmqGBWA62TWPujiNLg2B1NUaN4M9+gnFjED6J9PwNBd7RGCY65Bn4TiuO4aOKGqqVfd1kMg89jS3jgn2cmjGMAO5wA6zBZjquA3u06NQKoeTWC4InxHApHobgUsBia0MdgUWDozqJMNG9K1IJT1P6MSutgFUvhIHlRAnDQjS7i4BQ5MwcAQC2WDZC4DrpCVxLcDHo35XVk30CVOyagA6ia+qezQzkOCTBq7mT4OEBpapsbdWBw-1c2F2A6wrLAuD8PZuAaVggwM0k0y4FAEB3aRudgAGDi41ggeD0d+RIA0+xDIo5nF8B-6KBEBDjMZcw7T1+2HcdM0DUN-6vgHQeE5vDUHU0u9V0Nn76BADpFHAZD6MZ+g974+h1BUBXnzv1R73NF4kwz5eAvkdf+199ynU1Nqfe+4a51y5kYDgXB9At2Am3aA31G72W4FqE0PMJSslRpCS0oM4Ad1BiyBwVgvaQV8JUCA2R8hqiuhnfARI8Ct0GNgpuvhuANHfnAO2tdjjuH0DsLYmpR5P2mLjE4386qCyJjgawlhOzYIAALuk9A4eIm9E4NBUrXAgEAXBRQcioOqsUsDhUioFKAI0cp5V1oHEgT1bwFCWg5Aom8SrKifMATk6wOBhGyIHO2LQiQOmRhAbAjtN5WjxCY4G5iHFWO6v+BkcBmTEKGPobRCN9EFUTvocY3BfAix-DAYkIDt6X2qGSYk2TckrHyYU3RxSE4rCzDAMpxIzpJDCAQrAuBeyqFGR0r0mJ-anG9r7AoPSyDFDKGbOJhAOBjLVpQqZeiZlZywD7QgfslmFRKKUM2BMxnUwhKed8uMv6+HsBzJ6DQnn+E5rAJANh2YBHcEvcIkRamnGqBCO24hxDnMdjHbgccDGnOTk0lpkpZQFJ0dMkpx8sBgBIP0fpwB3wQClvwTho8sycCQOtOAWwyRNMxEk5FeT9DcH0fKLA8Rzm+JBRCfFMCRnf0IigwuPs7xErznUR+ZAWHEC1vrI5uAbao2oMeOoecugHgABpTygJqXAmsRIpEzGQA0RpcD6ARRQSheqWJsQhec3AjBDW9OdD0+Aog8hPUtVARVdsEXEhlSJA4Vp9CpF6Qk7lJxwWQrKOG5wwEcgiNdXAd1cAnoSKRUQtpzLWVPBoPEBY-oABecACgmggBAHUBRfAEBhmQdYJNeVJGgMPXmAwi14DLRWg0LQ2ijIDehFhhozFOrIPEKxvSGi5wdJSmG1KmmZtRbsnNAIzbZFgBFKta6iSkAKP2vc-SF35JZfS+IpyChOF7B6PIvj5T9MZVmpdMyjA7iwJ4l2JwuBcrjXuYgnB+lx3fZ+598bf1YBKv+bYGackovaeivZ8ov0vs8ffSVhUOSFVHj01Q+LsBwAAELUJgJdK0VKaXElmHPCyvlDL3sXXB5ddRZle0OQsmGsAZVwHxZAFYJQkAiwcDgYkGcHBuJI7O4kKxBr-VOMDQgM7Ya4ZwoRW2slyI4WMnUsBu9FVYFmAYP00ASiOw9JyKo8BkgtDbcI5BnAeDcPkA8KAzBoIQqbBsThSAWiVLqPkaOsdnH6AOUck5lmOOIuacvSITi6J5QIJ0QoUKyTRcWLFnIeQEsxrJHlOD-tIglWgoe-QcX0srNKN6XRuW4jjCQIV4r+RSvlccP0urqgeilD6HRW4MWitpfq4l8Y87oNMuPWy+IRJmAFBPEQYgDosZ-v5IoFQgr1zGVo-knL+y5kseOYso1aHU0QHsIh-24T5sDJWARew51ZV7nk3OiTQ2H30afWwJDDgCg-DfejVVUBqgHse3RopL3nAQFfe9iqudzYFEgLeTgg9fsfbcSeXc-TKML2o4Vx9CHQ7rouTEgEfT+RrbRUDhDz7QeeO-G4EgYBLnyxkyj8plSqY0OJPxnAtLuBHRodJPD5a8he35Id4CJBq3u2ALda0qBUB9TKNBTi8Ralsvdpj57ZPXsU-BxganO6cD0+R4QMpFS4BVJoWSGlkiKAgGJCAYEyBQCsTYFLJQrEEBYGQCAW8Uszju5tw6U4YA9QwAPPLeH1RkBUpt2aFwDh04Bk4KHuA5kaABmIPQAM2QPdgC4NbkAzx40qBOKCk4yB2dwBt+cvDAeg8Hk4aFHzpfRbl5AOcg8JM8gAEUMC9zgI3gTzf6c4EIB7uDufWB1BgKnCCdpkBdlDDbowOBU6nGYB7naC9c-Mh70ty0HuP0FH+vkfIueF2F+L33wTIAcD+gj+Jq-7e4Bd57xf5vx4HRT9UDPpAU4bee2ILnX7A6FwCED3TgCMXPXDbUB0d3PjJvG3egDaS6XwWAA8HFYgfoA4NWI8ToF-LYLYIAA
const env = process.env.NODE_ENV;
const isProduction = env === "production";
const isDevelopment = env === "development";
const isTest = env === "test"; // Resolve styled-jsx plugins
function styledJsxOptions(options) {
  if (!options) {
    return {};
  }
  if (!Array.isArray(options.plugins)) {
    return options;
  }
  options.plugins = options.plugins.map((plugin) => {
    if (Array.isArray(plugin)) {
      const [name, options] = plugin;
      return [require.resolve(name), options];
    }
    return require.resolve(plugin);
  });
  return options;
} // Taken from https://github.com/babel/babel/commit/d60c5e1736543a6eac4b549553e107a9ba967051#diff-b4beead8ad9195361b4537601cc22532R158
function supportsStaticESM(caller) {
  return !!(caller === null || caller === void 0
    ? void 0
    : caller.supportsStaticESM);
}
module.exports = (api, options = {}) => {
  console.log("hiihihihih");
  var _options$presetEnv;
  const supportsESM = api.caller(supportsStaticESM);
  const isServer = api.caller((caller) => !!caller && caller.isServer);
  const isModern = api.caller((caller) => !!caller && caller.isModern);
  const isLaxModern =
    isModern ||
    (((_options$presetEnv = options["preset-env"]) === null ||
    _options$presetEnv === void 0
      ? void 0
      : _options$presetEnv.targets) &&
      options["preset-env"].targets.esmodules === true);
  const presetEnvConfig = {
    // In the test environment `modules` is often needed to be set to true, babel figures that out by itself using the `'auto'` option
    // In production/development this option is set to `false` so that webpack can handle import/export with tree-shaking
    modules: "auto",
    exclude: ["transform-typeof-symbol"],
    ...options["preset-env"],
  }; // When transpiling for the server or tests, target the current Node version
  // if not explicitly specified:
  if (
    (isServer || isTest) &&
    (!presetEnvConfig.targets ||
      !(
        typeof presetEnvConfig.targets === "object" &&
        "node" in presetEnvConfig.targets
      ))
  ) {
    presetEnvConfig.targets = {
      // Targets the current process' version of Node. This requires apps be
      // built and deployed on the same version of Node.
      node: "current",
    };
  } // specify a preset to use instead of @babel/preset-env
  const customModernPreset =
    isLaxModern && options["experimental-modern-preset"];
  return {
    sourceType: "unambiguous",
    presets: [
      customModernPreset || [
        require("@babel/preset-env").default,
        presetEnvConfig,
      ],
      [
        require("@babel/preset-react"),
        {
          // This adds @babel/plugin-transform-react-jsx-source and
          // @babel/plugin-transform-react-jsx-self automatically in development
          development: isDevelopment || isTest,
          pragma: "__jsx",
          ...options["preset-react"],
        },
      ],
      [require("@babel/preset-typescript"), { allowNamespaces: true }],
    ],
    plugins: [
      [
        require("./plugins/jsx-pragma"),
        {
          // This produces the following injected import for modules containing JSX:
          //   import React from 'react';
          //   var __jsx = React.createElement;
          module: "react",
          importAs: "React",
          pragma: "__jsx",
          property: "createElement",
        },
      ],
      [
        require("./plugins/optimize-hook-destructuring"),
        {
          // only optimize hook functions imported from React/Preact
          lib: true,
        },
      ],
      require("@babel/plugin-syntax-dynamic-import"),
      require("./plugins/react-loadable-plugin"),
      [
        require("@babel/plugin-proposal-class-properties"),
        options["class-properties"] || {},
      ],
      [
        require("@babel/plugin-proposal-object-rest-spread"),
        { useBuiltIns: true },
      ],
      !isServer && [
        require("@babel/plugin-transform-runtime"),
        {
          corejs: false,
          helpers: true,
          regenerator: true,
          useESModules: supportsESM && presetEnvConfig.modules !== "commonjs",
          absoluteRuntime: process.versions.pnp ? __dirname : undefined,
          ...options["transform-runtime"],
        },
      ],
      // // disabled styled jsx
      // [
      //   isTest && options["styled-jsx"] && options["styled-jsx"]["babel-test"]
      //     ? require("styled-jsx/babel-test")
      //     : require("styled-jsx/babel"),
      //   styledJsxOptions(options["styled-jsx"]),
      // ],
      require("./plugins/amp-attributes"),
      isProduction && [
        require("babel-plugin-transform-react-remove-prop-types"),
        { removeImport: true },
      ],
      require("@babel/plugin-proposal-optional-chaining"),
      require("@babel/plugin-proposal-nullish-coalescing-operator"),
      isServer && require("@babel/plugin-syntax-bigint"),
      [require("@babel/plugin-proposal-numeric-separator").default, false],
    ].filter(Boolean),
    overrides: [
      {
        test: /\.tsx?$/,
        plugins: [require("@babel/plugin-proposal-numeric-separator").default],
      },
    ],
  };
};
