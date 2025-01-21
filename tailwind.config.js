/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./components/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        primaryHover: "#F4F9FF",
        primarydarkHover: "#194AD2",
        secondary: "#4FA0FF",
        secondaryHover: "#4487D7",
        greyHover: "#F8FAFC",
        bgDark: "#030B14",
        darkStrokeColour: "#152236",
        darkHover: "#09101B",
        textPrimary: "#121212",
        textSecondary: "#697586",
        strokeColour: "#F8F8F8",
      },
      fontFamily: {
        Sora: ["Sora", "serif"],
        Poppins: ["Poppins", "serif"],
      },
      fontSize: {
        h1: [
          "64px",
          {
            lineHeight: "80px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        h2: [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "38px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "body-small": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "body-medium": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "body-small-medium": [
          "14px",
          {
            lineHeight: "16x",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "footer-small": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "body-large": [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "body-extra-large": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "400",
          },
        ],
        "body-large-medium": [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
      },
    },
  },
  plugins: [],
}
