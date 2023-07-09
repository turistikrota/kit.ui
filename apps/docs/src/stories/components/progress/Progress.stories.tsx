import { Meta, StoryObj } from '@storybook/react'
import Progress from '@turistikrota/ui/progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: [],
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'The value of the progress',
    },
    width: {
      control: { type: 'number' },
      description: 'The width of the progress',
      defaultValue: 100,
    },
    height: {
      control: { type: 'number' },
      description: 'The height of the progress',
      defaultValue: 100,
    },
  },
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    value: 50,
    width: 100,
    height: 100,
  },
  render: ({ ...args }) => <Progress.Circle {...args} />,
}
