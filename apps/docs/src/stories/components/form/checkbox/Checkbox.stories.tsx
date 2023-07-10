import { Meta, StoryObj } from '@storybook/react'
import Checkbox from '@turistikrota/ui/form/checkbox'

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  tags: [],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'The native html name of the checkbox',
    },
    id: {
      control: { type: 'text' },
      description: 'The native html id of the checkbox',
    },
    required: {
      control: { type: 'boolean' },
      description: 'The native html required of the checkbox',
    },
    value: {
      control: { type: 'boolean' },
      description: 'The checkbox is checked or not',
    },
    error: {
      control: { type: 'string' },
      description: 'The error message of the checkbox for form validation',
    },
    reversed: {
      control: { type: 'boolean' },
      description:
        'Default checkbox position is left, if reversed is true, checkbox position is right and uses space-between flexbox',
    },
    effect: {
      options: ['hover', 'ring'],
      control: { type: 'select' },
      default: 'ring',
      description: 'The effect of the checkbox',
    },
    variant: {
      options: ['primary', 'secondary', 'error', 'warning', 'success'],
      control: { type: 'select' },
      default: 'primary',
      description: 'The variant of the checkbox',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the checkbox',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the checkbox',
    },
    onChange: {
      action: 'onChange',
      description: 'The change event of the checkbox',
    },
    onBlur: {
      action: 'onBlur',
      description: 'The blur event of the checkbox',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    name: 'checkbox',
    id: 'checkbox',
    required: false,
    value: false,
    error: 'This is an error message',
    reversed: false,
    effect: 'ring',
    variant: 'primary',
    size: 'md',
    children: 'Checkbox label',
  },
  render: ({ children, ...args }) => <Checkbox {...args}>{children}</Checkbox>,
}
