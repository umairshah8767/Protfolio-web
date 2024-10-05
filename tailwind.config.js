const colors = require('framer-motion').colors || {}; // colors کو درست طریقے سے درآمد کریں

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      ...colors, // موجودہ colors کو شامل کریں
      primary: colors.yellow, // اگر colors.yellow موجود نہ ہو تو ایک ڈیفالٹ رنگ استعمال کریں
      secondary: colors.yellow , // اسی طرح
    }
  },
  plugins: [],
};
