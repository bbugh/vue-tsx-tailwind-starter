module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
      : false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
