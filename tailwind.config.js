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
        "OrangeOne": "#36D1DC",
        "OrangeTwo": "#5B86E5",
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