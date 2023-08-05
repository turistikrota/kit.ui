import { Meta, StoryObj } from '@storybook/react'
import Stars from '@turistikrota/ui/stars'

const meta = {
  title: 'Components/Stars',
  component: Stars,
  tags: [],
  argTypes: {
    star: {
      control: { type: 'number' },
      description: 'The value of the progress',
    },
    maxStars: {
      control: { type: 'number' },
      description: 'The width of the progress',
      defaultValue: 5,
    },
    iconSize: {
      control: { type: 'string' },
      description: 'The height of the progress',
      defaultValue: '',
    },
  },
} satisfies Meta<typeof Stars>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    star: 3.5,
    maxStars: 5,
    iconSize: 'bx-sm',
  },
  render: ({ ...args }) => <Stars {...args} />,
}
