/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    spacing: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '18px',
      5: '24px'
    },
    extend: {
      padding: {
        7: '30px',
        8: '40px',
        9: '50px',
        10: '60px'
      },
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px'
      },
      colors: {
        woody: {
          700: "#805500",
          900: "#332200"
        }
      }
    },
  },
  plugins: [],
}

