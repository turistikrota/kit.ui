import type { Preview } from '@storybook/react'
import '../src/tailwind.css'
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
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Documentation', ['Welcome', '*'], 'Components', 'Hooks', 'Utils', 'Colors'],
        locales: 'en-US',
      },
      controls: {
        matchers: {
          date: /Date$/,
        },
      },
    },
  },
}

export default preview
