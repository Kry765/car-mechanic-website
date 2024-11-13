/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "orange-car": "url('/src/assets/background_orange_car.jpg')",
      },
    },
  },
  plugins: [],
};
