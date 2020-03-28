// references
// https://github.com/zeit/next.js/tree/canary/examples/with-tailwindcss

const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
  }
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
