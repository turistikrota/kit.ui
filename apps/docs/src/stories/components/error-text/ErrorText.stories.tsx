import { Meta, StoryObj } from '@storybook/react'
import ErrorText from '@turistikrota/ui/text/error'

const meta = {
  title: 'Components/ErrorText',
  component: ErrorText,
  tags: [],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The content of the error text',
    },
  },
} satisfies Meta<typeof ErrorText>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    children: 'john.doe',
  },
  render: ({ children, ...args }) => <ErrorText {...args}>{children}</ErrorText>,
}
