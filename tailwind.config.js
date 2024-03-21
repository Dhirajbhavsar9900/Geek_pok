/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage: "url('./images/bgcircle.png')"
    },    
    backgroundColor: {
      'warn-white': '#FBF3D5',
      'red': '#cd3131',
      'dark-red' : '#af0404',
      'black' : '#222831',
      'white' : 'white',
      'orange': '#f96d00',
      'dark' : '#ffb400',
      'light-yellow': '#FFD23F'
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