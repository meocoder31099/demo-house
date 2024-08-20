/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['"Lora"', 'serif']
      },
      maxWidth: {
        'screen-fhd': '1920px'
      },
      screens: {
        'screen-fhd': '1920px'
      },
      borderColor: {
        'base': '#d4d4d4'
      },
      backgroundColor: {
        'section-highlight': '#f8f8f7'
      }
    },
    corePlugins: {
      aspectRatio: false,
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'),]
}

