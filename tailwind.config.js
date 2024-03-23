/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: "url('./src/Images/bgcircle.png')"
    },    
    backgroundColor: {
      'warn-white': '#FBF3D5',
      'red': '#cd3131',
      'dark-red' : '#af0404',
      'black' : '#222831',
      'white' : 'white',
      'dark' : '#ffb400',
      'light-yellow': '#FFD23F',
      'orange': 'F55555',
    },
    dropShadow: {
      '3xl': '-5px -1px 2px rgba(0, 0, 0, 0.40)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },
    backgroundImage: {
      'radial-gradient': 'linear-gradient(90deg, rgba(255,245,219,1) 1%, rgba(255,254,242,1) 52%, rgba(255,240,204,1) 100%, rgba(255,235,184,1) 100%)',
    },
    fontFamily: {
      customFont: ['"Helvetica Neue"', "sans-serif"],
    },
   
  },
  plugins: [],
}



// @keyframes bounce {
//   0%, 100% {
//       transform: translateY(-25%);
//    
//   }
//   50% {
//       transform: none;
//       animation-timing-function: cubic-bezier(0,0,0.2,1);
//   }
// }
// .animate-bounce {
//   animation: bounce 1s infinite;
// }