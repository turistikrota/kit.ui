import { Meta, StoryObj } from '@storybook/react'
import LineForm from '@turistikrota/ui/form/line'
import DisabledSection from '@turistikrota/ui/section/disabled'

const meta = {
  title: 'Components/Section/Disabled',
  component: DisabledSection,
  tags: [],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
      default: 'sm',
      defaultValue: 'sm',
      description: 'The size of the username',
    },
    blur: {
      control: { type: 'boolean' },
      default: true,
      description: 'Blur the content of the section',
    },
    rounded: {
      control: { type: 'boolean' },
      default: true,
      description: 'Rounded the content of the section',
    },
    brightness: {
      control: { type: 'boolean' },
      default: true,
      description: 'Brightness the content of the section',
    },
    variant: {
      options: ['error', 'gray', 'maintenance', 'vip'],
      control: { type: 'select' },
      default: 'gray',
      defaultValue: 'gray',
    },
    icon: {
      control: { type: 'text' },
      description: 'The icon of the section',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the section',
    },
    description: {
      control: { type: 'text' },
      description: 'The description of the section',
    },
    button: {
      control: { type: 'text' },
      description: 'The button of the section',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the username',
    },
  },
} satisfies Meta<typeof DisabledSection>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    size: 'sm',
    blur: true,
    rounded: true,
    brightness: true,
    variant: 'gray',
    description: 'This is the description of the section.',
    title: 'This is the title of the section.',
  },
  render: ({ ...args }) => (
    <DisabledSection {...args}>
      <LineForm className='bg-second p-4 rounded-md'>
        <LineForm.Left>
          <LineForm.Left.Title>The title</LineForm.Left.Title>
          <LineForm.Left.Description>The description</LineForm.Left.Description>
        </LineForm.Left>
        <LineForm.Right>
          <span className='dark:text-gray-300'>Right side</span>
        </LineForm.Right>
      </LineForm>
    </DisabledSection>
  ),
}
