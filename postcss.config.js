// references
// https://github.com/zeit/next.js/tree/canary/examples/with-tailwindcss

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    // // https://purgecss.com/configuration.html#options
    // // you may need to whitelist some things with other modules
    // css: [],
    // whitelistPatternsChildren: [],
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
