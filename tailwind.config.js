/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        kgu_main_orange: "#F25822",
        kgu_main_yellow: "#F7941D",
        kgu_main_blue: "#005AAB",
        kgu_main_green: "#00AB5B",

        sak_main_pink: "#FCDAB0",
        sak_main_orange: "#F89F80",
        sak_main_apricot: "#F57B1F",
        sak_main_olivegreen: "#707E55",
        sak_main_artemisiagreen: "#698741",

        sak_point_green: "#A1E0C3",
        sak_point_jungle: "#007D88",
        sak_point_blue: "#95BADC",

        alert_success: "#219653",
        alert_warning: "#F2C94C",
        alert_danger: "#EB5757",
        alert_info: "#2F80ED",
      },
      fontFamily: {
        header: "var(--font-amagro)",
        title: "var(--font-nanumMyeongjo)",
        body: "var(--font-notoSerifKR)",
        bodySans: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
