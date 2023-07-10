import { Meta, StoryObj } from '@storybook/react'
import Textarea from '@turistikrota/ui/form/textarea'

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  tags: [],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the textarea',
    },
    label: {
      control: { type: 'text' },
      description: 'The label of the textarea',
    },
    name: {
      control: { type: 'text' },
      description: 'The semantic name of the textarea',
    },
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      control: { type: 'select' },
      default: 'text',
      description: 'The type of the textarea',
    },
    required: {
      control: { type: 'boolean' },
      description: 'The semantic required of the textarea',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the textarea',
    },
    autoComplete: {
      options: ['on', 'off'],
      control: { type: 'select' },
      default: 'off',
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'The semantic autoFocus of the textarea',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'The semantic disabled of the textarea',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'The semantic readOnly of the textarea',
    },
    pattern: {
      control: { type: 'text' },
      description: 'The semantic pattern of the textarea',
    },
    showHide: {
      control: { type: 'boolean' },
      description: 'You can show or hide the password',
    },
    showText: {
      control: { type: 'text' },
      description: "The text to show the password. It's for i18n purposes. Use like this: Show",
    },
    hideText: {
      control: { type: 'text' },
      description: "The text to hide the password. It's for i18n purposes. Use like this: Hide",
    },
    min: {
      control: { type: 'number' },
      description: 'The semantic min of the textarea',
    },
    max: {
      control: { type: 'number' },
      description: 'The semantic max of the textarea',
    },
    error: {
      control: { type: 'text' },
      description: 'The error message of the textarea',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'The aria-label of the textarea',
    },
    ariaDescribedBy: {
      control: { type: 'text' },
      description: 'The aria-describedby of the textarea',
    },
    ariaInvalid: {
      control: { type: 'boolean' },
      description: 'The aria-invalid of the textarea',
    },
    suffix: {
      control: { type: 'text' },
      description: 'The suffix of the textarea',
    },
    onChange: {
      action: 'onChange',
      description: 'The change event of the textarea',
    },
    onBlur: {
      action: 'onBlur',
      description: 'The blur event of the textarea',
    },
    rows: {
      control: { type: 'number' },
      description: 'The number of rows of the textarea',
    },
  },
} satisfies Meta<typeof Textarea>

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
    label: 'Username',
    name: 'username',
    disabled: false,
    autoComplete: 'off',
    autoFocus: true,
    ariaLabel: 'Username',
    error: '',
    rows: 4,
  },
  render: (args) => <Textarea {...args} />,
}
