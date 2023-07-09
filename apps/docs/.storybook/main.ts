import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-styling', '@storybook/addon-docs', 'storybook-addon-themes', '@storybook/addon-mdx-gfm'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {},
  features: {
    storyStoreV7: true
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;