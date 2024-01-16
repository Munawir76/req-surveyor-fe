/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A9FF',
        light: '#FAFAFA',
        dark: '#313131',
      },
    },
  },
  plugins: [],
};
