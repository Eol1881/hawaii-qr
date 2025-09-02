/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        caption: ['Caption', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif']
      },
      fontSize: {
        base: ['1rem', '1.25rem']
      },
      colors: {
        black: '#2A2A35',
        black2: '#171718',
        black3: '#2E2E3C',
        orange1: '#F58859',
        orange2: '#F6D08F',
        orange3: '#FFE4D8',
        orange4: '#FFEFCE',
        green1: '#B0FFCF',
        green2: '#87E1AA',
        red1: '#F55959',
        red2: '#FF6868',
        gray1: '#646478',
        gray2: '#212126',
        gray3: '#7F7F90',
        pink1: '#FFA9C8',
        pink2: '#A06B82',
        yellow1: '#FFE087',
        yellow2: '#AB9E62',
        white1: '#F7F4EE'
      },
      borderRadius: {
        20: '20px',
        30: '30px'
      },
      boxShadow: {
        inset: 'inset 0 0 0 1px',
        'inset-bold': 'inset 0 0 0 3px'
      },
      backgroundImage: {
        logo1: "url('/src/assets/images/logo1.svg')",
        'radial-yellow': 'radial-gradient(73.5% 62.99% at 49.85% 37.01%, #4b3127 0%, #151517 100%)',
        palms: 'url("/palms.svg")',
        noise: 'url("/noise.svg")',
        gradient: 'url("/bg-effect-1.png")'
      }
    }
  },
  plugins: []
};
