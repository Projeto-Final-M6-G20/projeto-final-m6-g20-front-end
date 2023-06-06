/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        feedback: {
          "alert-1": "#CD2B31",
          "alert-2": "#FDD8D8",
          "alert-3": "#FFE5E5",
          "succes-1": "#18794E",
          "success-2": "#CCEBD7",
          "success-3": "#DDF3E4",
        },

        "brand-1": "#4529e6",
        "brand-2": "#5126EA",
        "brand-3": "#B0A6F0",
        "brand-4": "#EDEAFD",
        "random-1": "#E34D8C",
        "random-2": "#C04277",
        "random-3": "#7D2A4D",
        "random-4": "#7000FF",
        "random-5": "#6200E3",
        "random-6": "#36007D",
        "random-7": "#349974",
        "random-8": "#2A7D5F",
        "random-9": "#153D2E",
        "random-10": "#6100FF",
        "random-11": "#5700E3",
        "random-12": "#30007D",

        primary: "#0B0D0D",
        secondary: "#4529E6",
      },
    },
  },
  plugins: [],
};
