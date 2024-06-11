/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unlock: ["var(--font-unlock)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary_orange: "#FF7420",
        primary_gray: "#191A19",
      },
      backgroundImage: {
        hero_image: "url('/hero_image.jpg')",
      },
    },
  },
  plugins: [],
};
