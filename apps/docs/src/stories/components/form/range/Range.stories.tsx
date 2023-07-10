import { Meta, StoryObj } from '@storybook/react'
import Range from '@turistikrota/ui/form/range'

const meta = {
  title: 'Components/Form/Range',
  component: Range,
  tags: [],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the range',
    },
    values: {
      control: { type: 'object' },
      description: 'The values of the range',
    },
    min: {
      control: { type: 'number' },
      description: 'The min value of the range',
    },
    max: {
      control: { type: 'number' },
      description: 'The max value of the range',
    },
    minText: {
      control: { type: 'text' },
      description: 'The min text of the range. This for i18n support',
    },
    maxText: {
      control: { type: 'text' },
      description: 'The max text of the range. This for i18n support',
    },
    onChange: {
      action: 'onChange',
      description: 'The onChange event of the range',
    },
  },
} satisfies Meta<typeof Range>

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
    values: {
      min: 0,
      max: 0,
    },
    minText: 'Min',
    maxText: 'Max',
  },
  render: (args) => <Range {...args} />,
}
