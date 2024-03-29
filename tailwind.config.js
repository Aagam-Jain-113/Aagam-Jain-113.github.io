module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hero1: "#e8efee",
        primary: "#303941",
      },
      fontFamily: {
        "inter":"Inter",
      },
      width: {
        74: "74%",
      },
      inset: {
        16: "66px",
        24: "100px",
        21: "20.5%",
        15: "13%",
      },
      height: {
        41: "41%",
        420 : "420px",
      },
      boxShadow: {
        current: "5px 5px 0px 0px rgb(81,168,121)",
      },
    },
  },
  plugins: [],
}
