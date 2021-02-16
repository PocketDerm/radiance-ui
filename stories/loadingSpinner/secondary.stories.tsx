import { Meta } from '@storybook/react';

export * from './index.stories';

export default {
  title: 'Components/LoadingSpinner/Secondary',
  parameters: {
    theme: 'secondary',
  },
  excludeStories: /.*/,
} as Meta;