module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        code: ["Fira Mono", "sans-serif"],
      },
      colors: {
        primary: "#D10606",
      },
      fontSize: {
        "12xl": "12rem",
        "15xl": "15rem",
        "20xl": "20rem",
      },
      inset: {
        "5/100": "5%",
        "7/100": "7%",
        "1/10": "10%",
        "12/100": "12%",
        "14/100": "14%",
        "1/6": "16.666667%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/6": "83.333333%",
        "85/100": "85%",
        "87/100": "87%",
        "11/12": "91.666667%",
      },
      spacing: {
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
      },

      keyframes: {
        blink: {
          "0%": { opacity: "0%" },
          "10%": { opacity: "100%" },
          "20%": { opacity: "0%" },
          "30%": { opacity: "0%" },
          "40%": { opacity: "100%" },
          "50%": { opacity: "0%" },
          "60%": { opacity: "0%" },
          "70%": { opacity: "0%" },
          "80%": { opacity: "0%" },
          "90%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0) scale(1.5)" },
          "10%": { transform: "translate(-3%, -5%) scale(1.5)" },
          "20%": { transform: "translate(-8%, 3%) scale(1.5)" },
          "30%": { transform: "translate(4%, -13%) scale(1.5)" },
          "40%": { transform: "translate(-3%, 13%) scale(1.5)" },
          "50%": { transform: "translate(-8%, 5%) scale(1.5)" },
          "60%": { transform: "translate(8%, 0%) scale(1.5)" },
          "70%": { transform: "translate(0%, 8%) scale(1.5)" },
          "80%": { transform: "translate(3%, -13%)  scale(1.5)" },
          "90%": { transform: "translate(-5%, 5%) scale(1.5)" },
        },
        smooth: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        blink: "blink .5s ease-in-out",
        grain: "grain .5s steps(10) infinite",
        smooth: "smooth .5s linear",
      },
      scale: {
        165: "1.65",
        170: "1.70",
        175: "1.75",
        200: "2",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
