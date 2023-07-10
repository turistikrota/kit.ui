import { Meta, StoryObj } from '@storybook/react'
import Toggle from '@turistikrota/ui/form/toggle'

const meta = {
  title: 'Components/Form/Toggle',
  component: Toggle,
  tags: [],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the toggle',
    },
    variant: {
      options: ['primary', 'secondary', 'error', 'warning', 'success'],
      control: { type: 'select' },
      default: 'primary',
      description: 'The variant of the toggle',
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'The default checked of the toggle',
      defaultValue: false,
    },
    title: {
      control: { type: 'text' },
      description: "The semantic title of the toggle. It's used for accessibility",
    },
    onChange: {
      action: 'onChange',
      description: 'The change event of the toggle',
    },
  },
} satisfies Meta<typeof Toggle>

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
    variant: 'primary',
    defaultChecked: false,
    title: 'Toggle',
  },
  render: (args) => <Toggle {...args} />,
}
