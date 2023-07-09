import type { Preview } from '@storybook/react'
import '@turistikrota/ui/assets/config.css'
import 'boxicons/css/boxicons.min.css'
import '../src/tailwind.css'
import { isDark } from './turistikrota.theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'Light',
          class: [],
          color: '#ffffff',
          default: !isDark,
        },
        {
          name: 'Dark',
          class: ['dark'],
          color: '#000000',
          default: isDark,
        },
      ],
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Documentation', ['Welcome', '*'], 'Components', 'Hooks', 'Utils', 'Colors'],
        locales: 'en-US',
      },
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/,
        },
      },
    },
  },
}

export default preview
