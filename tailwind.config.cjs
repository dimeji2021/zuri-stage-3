/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        tall: { raw: '(height: 600px)' },
      },
    },
  },
  plugins: [],
};
