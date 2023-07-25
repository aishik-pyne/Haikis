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
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
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

