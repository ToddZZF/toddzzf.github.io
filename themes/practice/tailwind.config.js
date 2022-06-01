module.exports = {
  content: [
    "./layouts/**/*.html",
    "./layouts/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#343a40",
        secondary: "#28494d",
        accent: "#CDB568",//"#4dabf4",
      },
      boxShadow: {
        'b-md': '0 1em 1em -0.9em rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
}

// run the command below to build css file
// npx tailwindcss -i ./static/css/source.css -o ./static/css/style.css