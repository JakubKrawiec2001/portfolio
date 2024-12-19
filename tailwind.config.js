/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "satoshi-medium": ["satoshi-medium", "sans-serif"],
        "satoshi-regular": ["satoshi-regular", "sans-serif"],
        "satoshi-black": ["satoshi-black", "sans-serif"],
        bitx: ["bitx", "sans-serif"],
      },
      colors: {
        "custom-white": "#D7D7D7",
        "custom-black": "#222222",
        "custom-blue": "#141DEA",
        "custom-gray": "#E3E2E7",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
