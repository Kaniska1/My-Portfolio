/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        background: {
          light: 'var(--background-light)',
          dark: 'var(--background-dark)',
        },
        foreground: {
          light: 'var(--foreground-light)',
          dark: 'var(--foreground-dark)',
        },
        primary: {
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
        },
      },
    },
  },
  plugins: [],
};