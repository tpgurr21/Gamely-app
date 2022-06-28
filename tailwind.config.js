const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // 'home-background': "url('\\\\images\\\\GamelyBackground.png')",
        // 'home-background': "url('images/GamelyBackground.png')",
      },
      colors: {
        'leafly-green': '#017C6B',
        'sidebar-bg': '#F6F6F6',
        'icon-color': '#45606e',
        'background-color': '#F0F0F0',
      },
    },
  },
  plugins: [],
};
