import { create, ThemeVars } from '@storybook/theming'

export const isDark =
  typeof window !== undefined && !!window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false

const light: ThemeVars = {
  base: 'light',
  appBg: '#e7edef',
  appContentBg: 'rgb(239, 244, 245)',
  appBorderColor: '#f2f0f0',
  textColor: 'rgb(107 114 128)',
  textInverseColor: 'rgb(75 85 99)',
  barTextColor: 'rgb(107 114 128)',
  barSelectedColor: '#ffffff',
  barBg: '#e7edef',
  inputBg: '#e7edef',
  inputBorder: '#f2f0f0',
  inputTextColor: 'rgb(107 114 128)',
}

const dark: ThemeVars = {
  base: 'dark',
  appBg: '#161616',
  appContentBg: '#0f0e0e',
  appBorderColor: '#252525',
  textColor: 'rgb(229 231 235)',
  textInverseColor: 'rgb(209 213 219)',
  barTextColor: 'rgb(229 231 235)',
  barSelectedColor: '#ffffff',
  barBg: '#161616',
  inputBg: '#161616',
  inputBorder: '#252525',
  inputTextColor: 'rgb(229 231 235)',
}

export default create({
  ...(!isDark ? light : dark),
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
