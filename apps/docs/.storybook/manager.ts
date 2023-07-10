import { addons } from '@storybook/manager-api'
import theme from './turistikrota.theme'

addons.setConfig({
  theme: theme,
  sidebar: {
    showRoots: true,
  },
})
