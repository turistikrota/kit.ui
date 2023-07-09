import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  fontBase: 'Arimo, sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Turistikrota Tech',
  brandUrl: 'https://turistikrota.com',
  brandImage: '/logo.png',
  brandTarget: '_blank',

  //
  colorPrimary: '#3397e6',
  colorSecondary: '#ffa500',

  // UI
  appBg: '#161616',
  appContentBg: '#0f0e0e',
  appBorderColor: '#252525',
  appBorderRadius: 10,

  // Text colors
  textColor: 'rgb(229 231 235)',
  textInverseColor: 'rgb(209 213 219)',

  // Toolbar default and active colors
  barTextColor: 'rgb(229 231 235)',
  barSelectedColor: '#ffffff',
  barBg: '#161616',

  // Form colors
  inputBg: '#161616',
  inputBorder: '#252525',
  inputTextColor: 'rgb(229 231 235)',
  inputBorderRadius: 10,
})
