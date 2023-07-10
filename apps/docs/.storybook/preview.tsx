import type { Preview } from '@storybook/react'
import '@turistikrota/ui/assets/config.css'
import 'boxicons/css/boxicons.min.css'
import './tailwind.css'
import theme, { isDark } from './turistikrota.theme'

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
        includeNames: true,
        order: [
          'Documentation',
          'Components',
          ['Accessibility', 'Section', 'Form', '*'],
          'Hooks',
          ['useToast', '*'],
          'Utils',
        ],
      },
    },
  },
}

export default preview
