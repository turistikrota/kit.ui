import { create } from '@storybook/theming'

export const isDark =
  typeof window !== undefined && !!window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false

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
