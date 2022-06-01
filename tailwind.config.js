module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme-blue': '#00B2D7',
        'theme-red': '#c7232c',
        'theme-golden': '#a98e49',
        'theme-mate-black': '#212529',
      },
      scale: {
        '120': '1.20',
      },
      screens: {
        '3xl': '1800px',
        'se': '380px',
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.2rem',
      }
    },
  },
  plugins: [],
}
