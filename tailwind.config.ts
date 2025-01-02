/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'serif'],
      },

      colors : {
        white : "#FFF",

        primary : {
          10 : "#051539",
          15 : "#263238",
          20 : '#2E3238',
          25 : '#303D5C'
        }, 
        
        secondary : {
          10 : "#FFD614",
          15 : "#EFD881",
          20 : '#F4E28C',
          25 : "#ffe466",
          30 : "#ffffff80"
        },

        neutral : {
          10 : "#8A9BB1",
          15 : "#CBD5E1",
          20 : "#FAFAFA",
          25 : '#F9F9F9',
          30 : '#4A4A5A',
          35 : "#CAD0D9",
          40 : '#F3F4F6',
          45 : '#B6B7C3',
          50 : "#e9ebeb",
          55 : '#E2E8F0',
          60 : '#F1F5F9',
          65 : "#6E7883",
          70 : "#fcfcfd",
          75 : "#6e78831f",
          80 : "#F8FAFC",
        }
      },

      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #EFD881 0%, #FFB200 100%)",
        "primary-gradient-light": "linear-gradient(180deg, #EFD881 0%, #C59629 100%)",
        "gradient-dark-blue": "linear-gradient(90deg, #122755 0%, #051539 100%)",
        "gradient-light-rose": "linear-gradient(0deg, rgba(255, 162, 57, 0.10) 0%, rgba(255, 162, 57, 0.10) 100%), #FFF",
        "gradient-gray": "linear-gradient(180deg, rgba(241, 233, 255, 0.80) 0%, #FAF7FF 100%)",
      },
      

      boxShadow : {
        "primary-shadow" : "0px 16px 28px -5px rgba(239, 216, 129, 0.15)",
        "shadow-light-gray" : "0px 20px 250px -20px rgba(151, 71, 255, 0.15)",
      }
    },
  },
  plugins: [],
}

