import * as RadixTabs from '@radix-ui/react-tabs';

import { ComponentProps, createContext } from 'react';
import { tv } from 'tailwind-variants';

type Colors = 'red' | 'blue' | 'green';

type TabsContextType = {
  variant: 'default' | 'solid';
  orientation?: 'horizontal' | 'vertical';
  listColor?: Colors;
};

export type RootProps = ComponentProps<typeof RadixTabs.Root> & {
  variant?: 'default' | 'solid';
  orientation?: 'horizontal' | 'vertical';
  color?: Colors;
};

export type ListProps = ComponentProps<typeof RadixTabs.List>;

export type TriggerProps = ComponentProps<typeof RadixTabs.Trigger> & {
  color?: Colors;
};

export type ContentProps = ComponentProps<typeof RadixTabs.Content>;

const rootTv = tv({
  base: 'flex w-[300px] rounded-lg overflow-hidden',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const listTv = tv({
  base: 'flex',
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'flex-row',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const triggerDefaultTv = tv({
  base: 'text-sm font-medium border-zinc-800 w-full text-white',
  variants: {
    color: {
      red: 'radix-state-active:border-red-500',
      blue: 'radix-state-active:border-blue-500',
      green: 'radix-state-active:border-green-500',
    },
    orientation: {
      horizontal: 'border-r-2 p-2',
      vertical: 'border-b-2 p-1',
    },
  },
  defaultVariants: {
    color: 'blue',
    orientation: 'horizontal',
  },
});

const triggerSolidTv = tv({
  base: 'text-sm font-medium border-zinc-800 w-full text-white',
  variants: {
    color: {
      red: 'radix-state-active:bg-red-500',
      blue: 'radix-state-active:bg-blue-500 bg-white dark:bg-black',
      green: 'radix-state-active:bg-green-500',
    },
    orientation: {
      horizontal: 'p-2',
      vertical: 'p-1',
    },
  },
  defaultVariants: {
    color: 'blue',
    orientation: 'horizontal',
  },
});

const TabsContext = createContext<TabsContextType>({
  variant: 'default',
  orientation: 'vertical',
  listColor: 'blue',
});

const Root = ({ variant, orientation, color, children, ...rest }: RootProps) => {
  return (
    <TabsContext.Provider
      value={{ orientation, listColor: color, variant: variant ? variant : 'default' }}
    >
      <RadixTabs.Root className={rootTv({ orientation: orientation })} {...rest}>
        {children}
      </RadixTabs.Root>
    </TabsContext.Provider>
  );
};

const List = ({ children, ...rest }: ListProps) => {
  return (
    <TabsContext.Consumer>
      {({ orientation }) => (
        <RadixTabs.List className={listTv({ orientation: orientation })} {...rest}>
          {children}
        </RadixTabs.List>
      )}
    </TabsContext.Consumer>
  );
};

const Trigger = ({ color, children, ...rest }: TriggerProps) => {
  const trigger = {
    default: triggerDefaultTv,
    solid: triggerSolidTv,
  };

  return (
    <TabsContext.Consumer>
      {({ variant, orientation, listColor }) => (
        <RadixTabs.Trigger
          className={trigger[variant]({
            orientation: orientation,
            color: color ? color : listColor,
          })}
          {...rest}
        >
          {children}
        </RadixTabs.Trigger>
      )}
    </TabsContext.Consumer>
  );
};

const Content = ({ children, ...rest }: ContentProps) => {
  return (
    <RadixTabs.Content className="text-white p-2" {...rest}>
      {children}
    </RadixTabs.Content>
  );
};

Root.List = List;
Root.Trigger = Trigger;
Root.Content = Content;

export default Root;
