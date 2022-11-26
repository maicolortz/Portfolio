/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        
      },
    
        
      keyframes: {
        
        wave: {
          '0%': { transform: 'rotate(0.0deg)', width:'10px' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)', width:'120px'},
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)', width:"auto"},
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        "bounce2":"bounce 4s infinite",
        "bounce3":"bounce 6s infinite"
      },
    },
  },
  plugins: [],
}