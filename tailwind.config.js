module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./_includes/**/*.{html,js}",
        "./_layouts/**/*.{html,js}",
        "./*.{html,js,md}",
        "./page/*.{html,md}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#343a40",
                secondary: "#28494d",
                accent: "#CDB568",//"#4dabf4",
            },
            backgroundImage: {
                'header-texture': "url('/style/images/bg.png')",
            },
            boxShadow: {
                'b-md': '0 1em 1em -0.9em rgba(255, 255, 255, 0.15)',
            },
        },
    },
    plugins: [],
}
