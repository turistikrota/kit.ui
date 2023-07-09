const { withTouristicUI } = require('@turistikrota/ui/config')

module.exports = withTouristicUI({
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
})
