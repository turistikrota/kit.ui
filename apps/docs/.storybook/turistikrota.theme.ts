import { create } from '@storybook/theming'

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
export default create({
  base: isDark ? 'dark' : 'light',
  fontBase: 'Arimo, sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Turistikrota Tech',
  brandUrl: 'https://turistikrota.com',
  brandImage: '/logo.png',
  brandTarget: '_self',
  colorPrimary: '#3397e6',
  colorSecondary: '#ffa500',
  appBorderRadius: 10,
  inputBorderRadius: 10,
})
