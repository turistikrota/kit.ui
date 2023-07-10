import { Meta, StoryObj } from '@storybook/react'
import Radio from '@turistikrota/ui/form/radio'

const meta = {
  title: 'Components/Form/Radio',
  component: Radio,
  tags: [],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'error', 'success', 'warning'],
      control: { type: 'select' },
      default: 'primary',
      defaultValue: 'primary',
      description: 'The variant of the radio',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      default: 'md',
      defaultValue: 'md',
      description: 'The size of the radio',
    },
    effect: {
      options: ['hover', 'ring'],
      control: { type: 'select' },
      default: 'ring',
      defaultValue: 'ring',
      description: 'The effect of the radio',
    },
    id: {
      control: { type: 'text' },
      description: 'The id of the radio',
    },
    name: {
      control: { type: 'text' },
      description: 'The name of the radio',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'The checked state of the radio',
    },
    reverse: {
      control: { type: 'boolean' },
      description: 'The reverse state of the radio. Radio position default is left, reverse is right',
    },
    onChange: {
      action: 'onChange',
      description: 'The onChange event of the radio',
    },
    children: {
      control: { type: 'text' },
      description: 'The content/label of the radio',
    },
  },
} satisfies Meta<typeof Radio>

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
    effect: 'ring',
    id: 'radio',
    name: 'radio',
    checked: false,
    reverse: false,
    children: 'Radio label',
  },
  render: ({ children, ...args }) => <Radio {...args}>{children}</Radio>,
}

export const List: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    effect: 'ring',
    id: 'radio',
    name: 'radio',
  },
  render: () => (
    <div className='flex flex-col'>
      <Radio id='my-id-1' name='multi-radio'>
        Like
      </Radio>
      <Radio id='my-id-2' name='multi-radio'>
        Love
      </Radio>
      <Radio id='my-id-3' name='multi-radio'>
        Haha
      </Radio>
      <Radio id='my-id-4' name='multi-radio'>
        Wow
      </Radio>
    </div>
  ),
}
