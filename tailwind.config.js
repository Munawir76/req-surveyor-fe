/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6a82fb',
        light: '#FAFAFA',
        dark: '#313131',
      },
    },
  },
  plugins: [],
};
