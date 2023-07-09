import { Meta, StoryObj } from '@storybook/react'
import Button from '@turistikrota/ui/button'

const meta = {
  title: '@turistikrota/ui/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => <Button>primary</Button>,
}
