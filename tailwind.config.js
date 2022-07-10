module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '0px',
      },
      keyframes:{
        scaleWidth:{
          '0%,100%':{width:'10px'}
        }
      },
      animation:{
        scaleWidth: 'scaleWidth 1s ease-in-out infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}