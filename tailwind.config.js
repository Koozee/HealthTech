/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Tambahkan file index.html di root
    "./src/**/*.{html,js}", // Masih sertakan src untuk HTML dan JS
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
        Poppins: "Poppins",
        Lato: "Lato",
      },
    },
  },
  plugins: [],
};
