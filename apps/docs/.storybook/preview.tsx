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
      transformSource: (source: any) =>
        source
          .replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g, '')
          .replace(/=\"\"/g, '')
          .replace(/ class=\"__ONLY_FOR_STORYBOOK_DEMONSTRATION_HOVER__\"/g, ''),
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
