/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'logo-screen': {'raw': '(max-height: 860px)'}
      },
      backgroundImage: {
        "lts-bg": "url('@/assets/bg.jpeg')",
        "card-large": "url('@/assets/card-large.png')",
        "card-medium": "url('@/assets/card-medium.png')",
        "btn-bg": "url('@/assets/btn.png')",
      },
      colors: {
        footer: '#131114'
      }
    },
  },
  plugins: [],
};
