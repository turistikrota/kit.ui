import type { Preview } from '@storybook/react'
import '@turistikrota/ui/assets/config.css'
import 'boxicons/css/boxicons.min.css'
import './tailwind.css'
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
    themes: {
      clearable: false,
      list: [
        {
          name: 'Dark',
          class: ['dark'],
          color: '#000000',
          default: true,
        },
      ],
    },
    options: {
      storySort: {
        includeNames: true,
        order: [
          'Documentation',
          ['Introduction', 'Package Structure', 'Customization', 'Eslint Configuration', 'Prettier Configuration'],
          'Components',
          ['Accessibility', 'Section', 'Form', 'Headers', '*'],
          'Hooks',
          ['useToast', '*'],
          'Pages',
          'Utils',
          'Theme',
        ],
      },
    },
  },
}

export default preview
