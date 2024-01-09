/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        waving: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        waving: "waving 1.5s ease-in-out infinite",
      },
      colors: {
        "primary-100": "#FDFCF9",
        "primary-200": "#D9D9D9",
        "secondary-100": "#000000",
      },
      fontFamily: {
        primary: ["Satoshi", "sans-serif"],
        secondary: ["Gotu", "sans-serif"],
        tertiary: ["Caveat", "roboto"],
      },
      backgroundImage: () => ({
        main: "url('./src/assets/img/general/main-bg.png')",
        hero: "url('./src/assets/img/general/hero.jpg')",
        services: "url('./src/assets/img/general/services-bg.jpg')",
      }),
    },
  },
  plugins: [],
};
