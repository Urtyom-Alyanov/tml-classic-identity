/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    content: [
        './Pages/**/*.cshtml',
        './Views/**/*.cshtml',
        './Pages/**/*.razor',
        './Views/**/*.razor'
    ],
}
