/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      colors: {
        'grey-darker': '#2D2D2D', // Slightly lighter grey
        'grey': '#757575', // Classic grey
        'grey-light': '#E9E9E9', // Light grey
        'grey-lighter': '#F4F4F4', // Even lighter grey
        'purple': '#A445ED', // Vivid purple
        'red': '#FF5252', // Bright red
      'black': '#050505', // A very dark black
      'dark': '#1F1F1F', // Dark grey
      'grey-dark': '#3A3A3A', // Medium dark grey
      'white': '#FFFFFF', // Pure white
    },},
  },
  plugins: [],
};
