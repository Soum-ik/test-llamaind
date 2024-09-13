
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
        // "2xl": "1400px",

      },
    },
    extend: {

      screens: {
        'xxs': '390px',
        'xs': '440px',
        "13inch": "1400px",
        "laptop": "1600px",
        "17inch": "1750px",
        "3xl": "2000px",
        "4xl": "2300px",
        "4k": "2560px",
        "5k": "2700px",
        "6k": "3000px",
        "7k": "3500px",
        "8k": "4000px",
        "9k": "5000px",
        "10k": "6000px",

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
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },
    },
  },
  plugins: [],
};
export default config;