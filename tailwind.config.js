/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f1f1f1",
        darkslategray: {
          "100": "#3e3636",
          "200": "#373737",
          "300": "#323232",
        },
        lightgray: "#d6d6d6",
        white: "#fff",
        gray: {
          "100": "#fdfdfd",
          "200": "#1e1e1e",
          "300": "#171616",
        },
        darkslateblue: {
          "100": "#023a78",
          "200": "#043266",
          "300": "#03275c",
        },
        dimgray: {
          "100": "#716969",
          "200": "#5f5d5d",
        },
        burlywood: "#bb8e59",
        black: "#000",
        darkgreen: "#2d7005",
      },
      spacing: {},
      fontFamily: {
        marcellus: "Marcellus",
        "marcellus-sc": "'Marcellus SC'",
        roboto: "Roboto",
        "roboto-slab": "'Roboto Slab'",
        inherit: "inherit",
        "be-vietnam": "'Be Vietnam'",
        "nova-cut": "'Nova Cut'",
        lateef: "Lateef",
        krub: "Krub",
        "faster-one": "'Faster One'",
        lalezar: "Lalezar",
        hahmlet: "Hahmlet",
      },
    },
    fontSize: {
      xl: "20px",
      "17xl": "36px",
      "6xl": "25px",
      mini: "15px",
      lg: "18px",
      sm: "14px",
      "21xl": "40px",
      "3xl": "22px",
      "29xl": "48px",
      base: "16px",
      "lg-5": "18.5px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
