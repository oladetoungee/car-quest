/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#f9f9f9",
        pink: "#ff00ff",
        gray: "#f9f9f9",
        charcoal: '#36454F',
        darkgreen: '#023020',
        darkpurple: '#301934',
        jetblack: '#343434',
        licorice: '#1B1212',
        matteblack: '#28282B',
        midnightblue: '#191970',
        onyx: '#353935',
      },
      fontFamily: {
        pthin: ["Poppins-Thin"],
        plight: ["Poppins-Light"],
        pregular: ["Poppins-Regular"],
        pmedium: ["Poppins-Medium"],
        psemibold: ["Poppins-SemiBold"],
        pbold: ["Poppins-Bold"],
        pextrabold: ["Poppins-ExtraBold"],
        pblack: ["Poppins-Black"],
          

      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}

