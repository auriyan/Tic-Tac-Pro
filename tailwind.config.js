/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        spaceBlue: '#001E3C',
        neonLight: '#4FC3F7',
        neonAqua: '#00E5FF',
        deepSpace: '#0A1929',
        galaxyGray: '#BBDEFB',
      },
    },
  },
  plugins: [],
}
