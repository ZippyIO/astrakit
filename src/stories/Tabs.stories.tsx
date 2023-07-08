import { type Meta, type StoryObj } from '@storybook/react';

import Tabs, { RootProps } from '~/components/Tabs';

const CompleteTab = ({ variant, orientation, color, listBg }: RootProps) => (
  <Tabs
    variant={variant}
    defaultValue="home"
    orientation={orientation}
    color={color}
    listBg={listBg}
  >
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
      options: ['default', 'solid'],
      control: { type: 'select' },
      description: 'Styling Variant - [default, solid]',
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
      description: 'Orientation - [horizontal, vertical]',
    },
    color: {
      options: ['red', 'blue', 'green', 'light', 'dark'],
      control: { type: 'select' },
      description: 'Tab Border/Bg Color - [red, blue, green, light, dark]',
    },
    listBg: {
      options: ['none', 'light', 'dark'],
      control: { type: 'select' },
      description: 'Tab Trigger Bg Color - [none, light, dark] (Default Variant only)',
    },
  },
} satisfies Meta<typeof CompleteTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    orientation: 'horizontal',
    color: 'blue',
    listBg: 'none',
  },
};

export const DefaultVertical: Story = {
  args: {
    variant: 'default',
    orientation: 'vertical',
    color: 'blue',
    listBg: 'none',
  },
};

export const SolidHorizontal: Story = {
  args: {
    variant: 'solid',
    orientation: 'horizontal',
    color: 'blue',
    listBg: 'none',
  },
};

export const SolidVertical: Story = {
  args: {
    variant: 'solid',
    orientation: 'vertical',
    color: 'blue',
    listBg: 'none',
  },
};
