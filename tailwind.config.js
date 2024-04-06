/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                "tallscreen": { "raw": "(min-aspect-ratio: 1/2)" },
                "widescreen": { "raw": "(min-aspect-ratio: 3/2)" },
            },
            keyframes: {
                "open-menu": {
                    "0%": { "transform": "scaleY(0)" },
                    "80%": { "transform": "scaleY(1.2)" },
                    "100%": { "transform": "scaleY(1)" },
                },
            },
            animation: {
                "open-menu": "open-menu 0.2s ease-in-out forwards",
            },
        },
    },
    plugins: [],
}