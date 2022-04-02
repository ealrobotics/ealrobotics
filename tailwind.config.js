module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-img": "url('../assets/team.jpg')",
        "vision-img": "url('../assets/vision.jpg')",
        "mission-img": "url('../assets/mission.jpg')",
      }),
      fontFamily: {
        biz: ["Righteous", "cursive"],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#021c41",
        secondary: "#86def2",
      }),
      textColor: {
        primary: "#021c41",
        secondary: "#86def2",
      },
    },
  },
  plugins: [],
}
