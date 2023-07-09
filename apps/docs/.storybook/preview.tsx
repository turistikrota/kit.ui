import type { Preview } from '@storybook/react'
import '../src/index.css'
import theme from './turistikrota.theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme,
    },
  },
}

export default preview
