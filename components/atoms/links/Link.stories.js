import React from 'react';
import AnchorLink from './Link';
import mdx from './Link.mdx';

export default {
  title: `Components/Atoms/Link`,
  component: AnchorLink,
  /* Argtypes are same as PropTypes in React @see: https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/props-tables.md#args-controls */
  argTypes: {
    disabled: {
      description: 'Enable/Disable the link',
      control: {
        type: 'radio',
        options: [true, false],
      },
    },
    visited: {
      description: 'Link Visited?',
      control: {
        type: 'radio',
        options: [true, false],
      },
    },
    size: {
      description: 'Change the link size',
      control: {
        type: 'radio',
        options: ['sm', 'lg', 'xl'],
      },
    },
    target: {
      description: 'Target external?',
      control: {
        type: 'radio',
        options: ['_blank', ''],
      },
    },
  },

  parameters: {
    component: AnchorLink,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => <AnchorLink {...args}>Basic link</AnchorLink>;

export const BasicLinkWithControls = Template.bind({});
BasicLinkWithControls.args = {
  disabled: false,
  visited: false,
  size: 'sm',
  target: '',
};

export const Default = () => <AnchorLink>Default</AnchorLink>;

export const Emoji = () => (
  <AnchorLink>
    <span role="img" aria-label="so cool">
      😀
    </span>{' '}
    Link
  </AnchorLink>
);

export const Disabled = () => <AnchorLink disabled={true}>Disabled link</AnchorLink>;

export const Visited = () => (
  <AnchorLink visited={true} disabled={false}>
    Visited link
  </AnchorLink>
);

export const SizeSmall = () => (
  <AnchorLink size="sm" disabled={false}>
    Small link
  </AnchorLink>
);

export const SizeLarge = () => (
  <AnchorLink size="lg" disabled={false}>
    Large link
  </AnchorLink>
);

export const SizeXtraLarge = () => (
  <AnchorLink size="lg" disabled={false}>
    XLarge link
  </AnchorLink>
);
SizeXtraLarge.args = { size: 'xl', value: 'XLarge Link', children: 'XLarge link' };

export const WithExternalHref = () => (
  <AnchorLink href="https://www.github.com/dtro-devuk" target="_blank">
    External
  </AnchorLink>
);

export const WithInternalHref = () => <AnchorLink href="/">Internal</AnchorLink>;
