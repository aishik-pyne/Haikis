/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html, md}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        'desktop': '1024px'
      },
      fontFamily: {
        signature: ['Radicalis']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-fontawesome')({
      version: 6
  }),
    require('flowbite/plugin')
  ]
}

