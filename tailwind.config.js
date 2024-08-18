

const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '440px'
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Roboto_Flex: ["Roboto Flex", "sans-serif"],
      },
      colors: {
        textColor: `#D5D5D5`,
      },

    },
  },
  plugins: [],
};
export default config;