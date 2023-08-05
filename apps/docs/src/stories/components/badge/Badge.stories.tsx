import { Meta, StoryObj } from '@storybook/react'
import Badge from '@turistikrota/ui/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: [],
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description:
        'The variant to display in the feature card. Possible values are: primary, success, warning, danger.',
      defaultValue: 'primary',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: [
          'primary',
          'success',
          'warning',
          'danger',
          'default',
          'secondary',
          'yellow',
          'blue',
          'green',
          'purple',
          'orange',
          'indigo',
          'teal',
        ],
      },
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'The size of the badge.',
      defaultValue: 'md',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    children: {
      name: 'children',
      type: { name: 'string', required: false },
      description: 'The content of the badge.',
      defaultValue: 'Badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Badge' },
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Badge Content',
  },
  render: ({ ...args }) => <Badge {...args} />,
}
