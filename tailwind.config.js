/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "small": { raw: "(max-width : 1100px)" },
      },
    },
  },
  plugins: [],
}

