/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'foundation-white-light': '#FDFDFD',
        'nav-gray': '#7D7F88',
        foundation: '#D6D6D6',
        base: '#FCFCFC',
      },
      // fontSize: {
      //   xxs: '0.625rem',
      //   xs: '0.75rem',
      // },
    },
  },
  plugins: ['nativewind/babel'],
}
