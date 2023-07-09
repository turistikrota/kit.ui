import { Meta, StoryObj } from '@storybook/react'
import Username from '@turistikrota/ui/username'

const meta = {
  title: 'Components/Username',
  component: Username,
  tags: [],
  argTypes: {
    size: {
      options: ['normal', 'xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the username',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the username',
    },
  },
} satisfies Meta<typeof Username>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    size: 'md',
    children: 'john.doe',
  },
  render: ({ children, ...args }) => <Username {...args}>{children}</Username>,
}
