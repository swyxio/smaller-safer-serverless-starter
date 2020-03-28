// recommendations from the tailwind UI docs
// https://www.notion.so/Tailwind-UI-Documentation-f9083ed0e2694690ac89253e88afb2b6
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
