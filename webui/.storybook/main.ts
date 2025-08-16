import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  "staticDirs": ['../dist'],
  
  async viteFinal(config) {
    return mergeConfig(config, {
      server: {
        fs: {
          allow: ['..'],
        },
      },
      // Vite will handle HMR automatically for TypeScript files
      // The web-components-hmr plugin from main vite config will be used
    });
  },
};
export default config;