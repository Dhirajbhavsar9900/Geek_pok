/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: "url(./images/bgcircle.png)"
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