import { Meta, StoryObj } from '@storybook/react'
import Input from '@turistikrota/ui/form/input'

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  tags: [],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the input',
    },
    label: {
      control: { type: 'text' },
      description: 'The label of the input',
    },
    name: {
      control: { type: 'text' },
      description: 'The semantic name of the input',
    },
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      control: { type: 'select' },
      default: 'text',
      description: 'The type of the input',
    },
    required: {
      control: { type: 'boolean' },
      description: 'The semantic required of the input',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the input',
    },
    autoComplete: {
      options: ['on', 'off'],
      control: { type: 'select' },
      default: 'off',
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'The semantic autoFocus of the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'The semantic disabled of the input',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'The semantic readOnly of the input',
    },
    pattern: {
      control: { type: 'text' },
      description: 'The semantic pattern of the input',
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
      description: 'The semantic min of the input',
    },
    max: {
      control: { type: 'number' },
      description: 'The semantic max of the input',
    },
    error: {
      control: { type: 'text' },
      description: 'The error message of the input',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'The aria-label of the input',
    },
    ariaDescribedBy: {
      control: { type: 'text' },
      description: 'The aria-describedby of the input',
    },
    ariaInvalid: {
      control: { type: 'boolean' },
      description: 'The aria-invalid of the input',
    },
    suffix: {
      control: { type: 'text' },
      description: 'The suffix of the input',
    },
    onChange: {
      action: 'onChange',
      description: 'The change event of the input',
    },
    onBlur: {
      action: 'onBlur',
      description: 'The blur event of the input',
    },
  },
} satisfies Meta<typeof Input>

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
  },
  render: ({ ...args }) => <Input {...args} />,
}

export const WithError: Story = {
  args: {
    size: 'md',
    label: 'Username',
    name: 'username',
    disabled: false,
    autoComplete: 'off',
    autoFocus: false,
    ariaLabel: 'Username',
    error: 'Username is required',
  },
  render: ({ ...args }) => <Input {...args} />,
}

export const WithSuffix: Story = {
  args: {
    size: 'md',
    label: 'Search',
    name: 'search',
    disabled: false,
    autoComplete: 'off',
    autoFocus: false,
    ariaLabel: 'search',
    error: '',
    suffix: <i className='bx bx-search' />,
  },
  render: ({ ...args }) => <Input {...args} />,
}

export const MinMaxNumber: Story = {
  args: {
    size: 'md',
    label: 'Search',
    name: 'search',
    disabled: false,
    autoComplete: 'off',
    autoFocus: false,
    ariaLabel: 'search',
    error: '',
    type: 'number',
    min: 0,
    max: 10,
  },
  render: ({ ...args }) => <Input {...args} />,
}

export const Password: Story = {
  args: {
    size: 'md',
    label: 'Password',
    name: 'password',
    disabled: false,
    autoComplete: 'off',
    autoFocus: false,
    ariaLabel: 'password',
    error: '',
    type: 'password',
    showHide: true,
    showText: 'Show',
    hideText: 'Hide',
  },
  render: ({ ...args }) => <Input {...args} />,
}
