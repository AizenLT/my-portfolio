/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Blue for buttons and accents
        secondary: '#10b981', // Green for secondary elements
        darkBg: '#1e293b', // Dark background
        lightBg: '#f1f5f9', // Light background
        darkText: '#e2e8f0', // Light text for dark mode
        lightText: '#1e293b', // Dark text for light mode
      },
    },
  },
  plugins: [],
}