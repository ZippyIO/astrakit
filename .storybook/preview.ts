import type { Preview } from '@storybook/react';
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

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
      theme: themes.dark,
    },
    darkMode: {
      current: 'dark',
    },
  },
};

export default preview;
