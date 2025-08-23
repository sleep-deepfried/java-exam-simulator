/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'exam-blue': '#1e40af',
        'exam-green': '#059669',
        'exam-red': '#dc2626',
        'exam-gray': '#374151',
      },
      fontFamily: {
        'sans': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
