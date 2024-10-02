/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'idealist-sans': ["Idealist sans", "sans-seirf"],
        'druk-text-wide': ["Druk text wide", "sans-seirf"],
        'druk-text-wide-cyr': ["Druk text wide cyr", "sans-seirf"],
        'inter': ["Inter", "sans-seirf"],
      }
    },
  },
  plugins: [],
}

