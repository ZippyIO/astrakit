import * as RadixTabs from '@radix-ui/react-tabs';

import { ComponentProps, createContext } from 'react';
import { tv } from 'tailwind-variants';

type Colors = 'red' | 'blue' | 'green' | 'light' | 'dark';

type TabsContextType = {
  variant: 'default' | 'solid';
  orientation?: 'horizontal' | 'vertical';
  listColor: Colors;
  listBg: 'none' | 'light' | 'dark';
};

export type RootProps = ComponentProps<typeof RadixTabs.Root> & {
  variant?: 'default' | 'solid';
  orientation?: 'horizontal' | 'vertical';
  color?: Colors;
  listBg?: 'none' | 'light' | 'dark';
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
      horizontal: 'flex-col',
      vertical: 'flex-row',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

const listTv = tv({
  base: 'flex',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

const triggerDefaultTv = tv({
  base: 'text-sm font-medium border-zinc-800 w-full',
  variants: {
    color: {
      red: 'radix-state-active:border-red-500',
      blue: 'radix-state-active:border-blue-500',
      green: 'radix-state-active:border-green-500',
      light: 'radix-state-active:border-white',
      dark: 'radix-state-active:border-black',
    },
    orientation: {
      horizontal: 'border-b-2 p-1',
      vertical: 'border-r-2 p-2',
    },
    bg: {
      none: 'text-black dark:text-white',
      light: 'bg-zinc-200 text-black',
      dark: 'bg-zinc-900 text-white',
    },
  },
  defaultVariants: {
    color: 'blue',
    orientation: 'vertical',
    bg: 'none',
  },
});

const triggerSolidTv = tv({
  base: 'text-sm font-medium border-zinc-800 w-full',
  variants: {
    color: {
      red: 'radix-state-active:bg-red-500 dark:radix-state-active:bg-red-500 bg-zinc-900 text-zinc-100',
      blue: 'radix-state-active:bg-blue-600 dark:radix-state-active:bg-blue-600 bg-zinc-900 text-zinc-100',
      green:
        'radix-state-active:bg-green-600 dark:radix-state-active:bg-green-600 bg-zinc-900 text-zinc-50',
      light: 'radix-state-active:bg-white bg-zinc-200 text-black',
      dark: 'radix-state-active:bg-zinc-900 bg-zinc-800 text-zinc-200',
    },
    orientation: {
      horizontal: 'p-1',
      vertical: 'p-2',
    },
  },
  defaultVariants: {
    color: 'blue',
    orientation: 'vertical',
  },
});

const TabsContext = createContext<TabsContextType>({
  variant: 'default',
  orientation: 'horizontal',
  listColor: 'blue',
  listBg: 'none',
});

const Root = ({ variant, orientation, color, listBg, children, ...rest }: RootProps) => {
  return (
    <TabsContext.Provider
      value={{
        variant: variant ? variant : 'default',
        orientation,
        listColor: color ? color : 'blue',
        listBg: listBg ? listBg : 'none',
      }}
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
      {({ variant, orientation, listColor, listBg }) => (
        <RadixTabs.Trigger
          className={trigger[variant]({
            orientation: orientation,
            color: color ? color : listColor,
            bg: listBg,
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
