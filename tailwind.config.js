/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        background: "#F9FAFB",
        surface: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
