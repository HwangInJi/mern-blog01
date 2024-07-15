/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard-Regular", "sans-serif"],
        cafe24lovingu: ["Cafe24Lovingu", "cursive"],
      },
    },
  },
  plugins: [],
};
