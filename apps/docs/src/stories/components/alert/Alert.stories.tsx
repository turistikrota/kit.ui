import { Meta, StoryObj } from '@storybook/react'
import Alert from '@turistikrota/ui/alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: [],
  argTypes: {
    /**
     * @description The type of the alert
     * @type {('success' | 'error' | 'info' | 'warning' | 'primary' | 'secondary')}
     * @default 'primary'
     * @control Select
     * @required
     * @group Alert
     * @section Appearance
     * @satisfies Meta<typeof Alert>
     */
    type: {
      options: ['success', 'error', 'info', 'warning', 'primary', 'secondary'],
      control: { type: 'select' },
      required: true,
      description: 'The type of the alert',
    },

    // the rest of the props
    onClose: { action: 'onClose', description: 'The close event of the alert' },
    show: { control: { type: 'boolean' }, default: true, description: 'Show or hide the alert' },
    showIcon: { control: { type: 'boolean' }, default: false, description: 'Show or hide the icon' },
    closable: { control: { type: 'boolean' }, default: false, description: 'Show or hide the close button' },
    children: { control: { type: 'text' }, default: 'Alert', description: 'The content of the alert' },
  },
} satisfies Meta<Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Alert',
  },
  render: (args) => <Alert {...args} />,
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary Alert',
  },
  render: (args) => <Alert {...args} />,
}

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Success Alert',
  },
  render: (args) => <Alert {...args} />,
}

export const Error: Story = {
  args: {
    type: 'error',
    children: 'Error Alert',
  },
  render: (args) => <Alert {...args} />,
}

export const Info: Story = {
  args: {
    type: 'info',
    children: 'Info Alert',
  },
  render: (args) => <Alert {...args} />,
}

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Warning Alert',
  },
  render: (args) => <Alert {...args} />,
}

export const Closable: Story = {
  args: {
    type: 'primary',
    children: 'Closable Alert',
    closable: true,
  },
  render: (args) => <Alert {...args} />,
}

export const ShowIcon: Story = {
  args: {
    type: 'primary',
    children: 'Show Icon Alert',
    showIcon: true,
  },
  render: (args) => <Alert {...args} />,
}

export const Description: Story = {
  args: {
    type: 'primary',
    children: <Alert.Description>Alert Description</Alert.Description>,
  },
  render: (args) => <Alert {...args} />,
}

export const Title: Story = {
  args: {
    type: 'primary',
    children: <Alert.Title>Alert Title</Alert.Title>,
  },
  render: (args) => <Alert {...args} />,
}

export const TitleAndDescription: Story = {
  args: {
    type: 'primary',
    children: (
      <>
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>Alert Description</Alert.Description>
      </>
    ),
  },
  render: (args) => <Alert {...args} />,
}

export const Full: Story = {
  args: {
    type: 'primary',
    showIcon: true,
    closable: true,
    children: (
      <>
        <Alert.Title>Alert Title</Alert.Title>
        <Alert.Description>Alert Description</Alert.Description>
      </>
    ),
  },
  render: (args) => <Alert {...args} />,
}
