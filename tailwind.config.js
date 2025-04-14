/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#570DF8',
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      {
        dark: {
          primary: '#793EF9',
          secondary: '#FF0080',
          accent: '#1FB2A5',
          neutral: '#191D24',
          'base-100': '#000000',
          info: '#66C8FF',
          success: '#4ADE80',
          warning: '#FBBD23',
          error: '#FF6F6F',
        },
      },
    ],
  },
}
