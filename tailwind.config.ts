import { type Config } from 'tailwindcss'

export const screens = {
  '4xs': '16rem', //   256px
  '3xs': '20rem', //   320px
  '2xs': '22.5rem', // 360px
  xs: '25rem', //      400px
  sm: '36rem', //      576px
  md: '48rem', //      768px
  lg: '64rem', //      1024px
  xl: '80rem', //      1280px
  '2xl': '90rem', //   1440px
  '3xl': '96rem', //    1536px
  '5xl': '120rem' //    1920px
} as const

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './__stories__/*.story.tsx', './__stories__/**/*.story.tsx'],
  corePlugins: {
    preflight: false
  },
  theme: {
    screens: screens
  },
  plugins: []
} satisfies Config
