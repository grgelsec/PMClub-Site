/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // CURRENT THEME: FAANG-inspired professional palette
        primary: {
          DEFAULT: "#6366F1", // Professional indigo
          dark: "#4F46E5",
          light: "#A5B4FC",
        },
        secondary: {
          DEFAULT: "#0EA5E9", // Sky blue
          dark: "#0284C7", // Ocean blue
        },
        accent: {
          DEFAULT: "#10B981", // Professional emerald
          light: "#6EE7B7",
        },



        // Preserve original signature colors
        lavender: "#D5B8FF",
        "original-green": "#98FFD6", // Original mint green
        "original-orange": "#FFD6A5", // Original peach
        // Sophisticated neutrals
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          900: "#111827",
        },
      },
      animation: {
        typewritter: "typewriter 3s steps(97) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
