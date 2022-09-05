// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-color": "hsl(31, 100%, 70%)",
        "button-color": "hsl(0, 0%, 17%)",
        "button-color-alt": "hsl(0, 0%, 21%)",
        "title-color": "hsl(0, 0%, 15%)",
        "text-color": "hsl(0, 0%, 35%)",
        "text-color-light": "hsl(0, 0%, 55%)",
        "body-color": "hsl(0, 0%, 99%)",
        "container-color": "#fff",
        "border-color": "hsl(0, 0%, 94%)",
        box_shadow: "0 12px 32px hsl(0deg 0% 20% / 10%)",
      },
    },
  },
  plugins: [],
};
