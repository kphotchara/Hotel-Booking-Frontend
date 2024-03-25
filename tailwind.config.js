/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        'normal': [
            '0px 4px 4px rgba(0, 0, 0, 0.25)',
            '0px 4px 4px rgba(0, 0, 0, 0.25)'
        ]
      },
      fontFamily: {
        Montserrat: ['Montserrat','sans-serif'],
        Poppins: ['Poppins','sans-serif'],
        Prompt:['Prompt','sans-serif'],
        
      },
    },
  },
  plugins: [],
}

