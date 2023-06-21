/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // prettier-ignore
        "tarefas": "url('/images/background/jpeg')",
      }),
    },
  },
  plugins: [],
};
