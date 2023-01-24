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
        "OrangeOne": "#ff8008",
        "OrangeTwo": "#ffc837",
        "DeepOne": "#000000",
        "DeepTwo": "#434343",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}