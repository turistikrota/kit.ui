import { Meta, StoryObj } from '@storybook/react'
import Button from '@turistikrota/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: [],
  argTypes: {
    variant: {
      options: [
        'success',
        'error',
        'warning',
        'primary',
        'secondary',
        'gray',
        'gray-text',
        'transparent',
        'opacity',
        'vip',
      ],
      control: { type: 'select' },
      default: 'primary',
      defaultValue: 'primary',
      description: 'The variant of the button',
    },
    size: {
      options: ['normal', 'xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the button',
    },
    htmlType: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
      default: 'button',
      defaultValue: 'button',
      description: 'The html native type of the button',
    },
    block: {
      control: { type: 'boolean' },
      default: true,
      defaultValue: true,
      description: 'The button is block or not',
    },
    disabled: {
      control: { type: 'boolean' },
      default: false,
      defaultValue: false,
      description: 'The button is disabled or not',
    },
    className: {
      control: { type: 'text' },
      description: 'Add a custom class to the button',
    },
    title: {
      control: { type: 'text' },
      description: 'Add a native title and aria-label to the button',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the button',
    },
    onClick: { action: 'onClick', description: 'Triggered when the button is clicked' },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    htmlType: 'button',
    children: 'Button',
    block: true,
    disabled: false,
    className: '',
    title: '',
  },
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
}
