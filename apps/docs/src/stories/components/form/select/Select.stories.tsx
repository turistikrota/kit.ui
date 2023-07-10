import { Meta, StoryObj } from '@storybook/react'
import Select from '@turistikrota/ui/form/select'

const meta = {
  title: 'Components/Form/Select',
  component: Select,
  tags: [],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the select',
    },
    label: {
      control: { type: 'text' },
      description: 'The label of the select',
    },
    name: {
      control: { type: 'text' },
      description: 'The name of the select',
    },
    id: {
      control: { type: 'text' },
      description: 'The id of the select',
    },
    error: {
      control: { type: 'text' },
      description: 'The error of the select',
    },
    required: {
      control: { type: 'boolean' },
      description: 'The required of the select',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the select',
    },
    autoComplete: {
      control: { type: 'text' },
      description: 'The autoComplete of the select',
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'The autoFocus of the select',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'The disabled of the select',
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The defaultValue of the select',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'The readOnly of the select',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'The ariaLabel of the select',
    },
    ariaDescribedBy: {
      control: { type: 'text' },
      description: 'The ariaDescribedBy of the select',
    },
    ariaInvalid: {
      control: { type: 'text' },
      description: 'The ariaInvalid of the select',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the select',
    },
    onChange: {
      action: 'onChange',
      description: 'The onChange event of the select',
    },
  },
} satisfies Meta<typeof Select>

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
    label: 'Label',
    name: 'name',
    id: 'id',
    required: false,
    autoComplete: 'off',
    autoFocus: false,
    disabled: false,
    readOnly: false,
  },
  render: ({ ...args }) => (
    <Select {...args}>
      <option selected>Select an option</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
    </Select>
  ),
}
