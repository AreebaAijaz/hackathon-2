import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-footer': "url('/Image (4).png')"
      },
      container: {
        padding: {
          DEFAULT: "20px", // Mobile padding
          md: "40px",      // Padding for medium screens and above
        },
      },    
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
      },
      // fontSize: {
      //   // Headings
      //   'H1': ['36px', { lineHeight: '140%' }],
      //   'H2': ['32px', { lineHeight: '140%' }],
      //   'H3': ['24px', { lineHeight: '140%' }],
      //   'H4': ['20px', { lineHeight: '140%' }],
      //   'H5': ['16px', { lineHeight: '140%' }],
      //   'H6': ['14px', { lineHeight: '140%' }],

      //   // Body Text
      //   'body-sm': ['14px', { lineHeight: '150%' }],
      //   'body-md': ['16px', { lineHeight: '150%' }],
      //   'body-lg': ['18px', { lineHeight: '150%' }],
      // },
      fontSize: {
        // You can add your custom font sizes here without overriding default sizes
        'custom-h1': ['36px', { lineHeight: '140%' }],
        'custom-h2': ['32px', { lineHeight: '140%' }],
        'custom-h3': ['24px', { lineHeight: '140%' }],
        'custom-h4': ['20px', { lineHeight: '140%' }],
        'custom-h5': ['16px', { lineHeight: '140%' }],
        'custom-h6': ['14px', { lineHeight: '140%' }],
        'body-sm': ['14px', { lineHeight: '150%' }],
        'body-md': ['16px', { lineHeight: '150%' }],
        'body-lg': ['18px', { lineHeight: '150%' }],
        'satoshi-regular': ['16px', { lineHeight: '150%' }],   // Satoshi Regular 16px
        'clash-regular': ['24px', { lineHeight: '140%' }],     // Clash Display Regular 24px
      },


      colors: {
        'primary': '#4E4D93',
        'dark-primary': '#2A254B',
        'white': '#FFFFFF',
        'light-grey': '#F9F9F9',
        'border-grey': '#EBE8F4',
        'border-dark': '#CAC6DA',
      },
    },
  },
  plugins: [],
};
export default config;
