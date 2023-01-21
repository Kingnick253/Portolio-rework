/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "FrostOne": "#000428",
        "FrostTwo": "#004e92",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}