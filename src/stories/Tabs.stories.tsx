import { type Meta, type StoryObj } from '@storybook/react';

import Tabs, { RootProps } from '~/components/Tabs';

const CompleteTab = ({ variant, color, orientation }: RootProps) => (
  <Tabs variant={variant} defaultValue="home" orientation={orientation} color={color}>
    <Tabs.List>
      <Tabs.Trigger value="home">Home</Tabs.Trigger>
      <Tabs.Trigger value="account">Account</Tabs.Trigger>
      <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="home">Tab 1 content</Tabs.Content>
    <Tabs.Content value="account">Tab 2 content</Tabs.Content>
    <Tabs.Content value="settings">Tab 3 content</Tabs.Content>
  </Tabs>
);

const meta = {
  title: 'Components/Tabs',
  component: CompleteTab,
  argTypes: {
    variant: {
      defaultValue: 'default',
      options: ['default', 'solid'],
      control: { type: 'select' },
    },
    color: {
      defaultValue: 'blue',
      options: ['red', 'blue', 'green'],
      control: { type: 'select' },
    },
    orientation: {
      defaultValue: 'vertical',
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CompleteTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    color: 'blue',
    orientation: 'vertical',
  },
};
