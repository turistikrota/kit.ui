import { Meta, StoryObj } from '@storybook/react'
import Condition from '@turistikrota/ui/condition'

const meta = {
  title: 'Components/Condition',
  component: Condition,
  tags: [],
  argTypes: {
    value: {
      control: { type: 'boolean' },
      description: 'The value of the condition',
      defaultValue: false,
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the condition',
    },
  },
} satisfies Meta<typeof Condition>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    value: true,
    children: 'john.doe',
  },
  render: ({ children, ...args }) => <Condition {...args}>{children}</Condition>,
}
