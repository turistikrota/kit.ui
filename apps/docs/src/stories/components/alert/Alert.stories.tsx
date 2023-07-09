import { Meta, StoryObj } from '@storybook/react'
import Alert from '@turistikrota/ui/alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: [],
  argTypes: {
    type: {
      options: ['success', 'error', 'info', 'warning', 'primary', 'secondary'],
      control: { type: 'select' },
      required: true,
    },
    onClose: { action: 'onClose' },
    show: { control: { type: 'boolean' }, defaultValue: true },
    showIcon: { control: { type: 'boolean' }, defaultValue: false },
    closable: { control: { type: 'boolean' }, defaultValue: false },
    children: { control: { type: 'text' }, defaultValue: 'Alert' },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    type: 'primary',
    children: <>Primary Alert</>,
  },
  render: (args) => <Alert {...args} />,
}
