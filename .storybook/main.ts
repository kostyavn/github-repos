import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../__stories__/*.story.@(js|jsx|ts|tsx|mdx)',
    '../__stories__/**/*.story.@(js|jsx|ts|tsx|mdx)',
    '../__stories__/**/**/*.story.@(js|jsx|ts|tsx|mdx)',
    '../__stories__/**/**/**/*.story.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation'
  }
}
export default config
