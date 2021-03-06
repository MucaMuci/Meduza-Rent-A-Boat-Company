module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['"Merriweather"', 'serif'],
        'inter': ['"Inter"', 'sans-serif']
      },

      boxShadow: {
        'btn-sjena': '0 1px 2px 1px rgba(0,0,0,0.3)',
      },
      colors: {
        'hci-modra': {
          DEFAULT: '#3C47A9'
        },
        'hci-modra-cool': {
          DEFAULT: 'rgba(60,71,169,0.5)'
        },
        'hci-bg': {
          DEFAULT: '#F6F6F6'
        },
        'hci-header': {
          DEFAULT: '#0F1544'
        },
        'hci-siva': {
          DEFAULT: '#B6B6B6'
        },
        'hci-gradient': {
          DEFAULT: '#4C5CEC'
        },
        'hci-siva-2': {
          DEFAULT: '#F2F2F2'
        },
        'hci-svijetlo-siva': {
          DEFAULT: '#E5E5E5'
        },
        'hci-siva-slova': {
          DEFAULT: '#585858'
        }
      }
    },
  },
  plugins: [],
}
