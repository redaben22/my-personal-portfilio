/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "--main-col": "var(--main-col)",
        "--sec-col": "var(--sec-col)",
        "--black-col": "var(--black-col)",
        "--white-col": "var(--white-col)",
      },
    },
  },
  plugins: [],
}

