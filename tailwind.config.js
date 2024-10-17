/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      elevation: {
        lg: 8,
      },
    },
  },
  plugins: [
    require('tailwindcss-elevation')(['responsive']),
  ],
}

