import { Meta, StoryObj } from '@storybook/react'
import Button from '@turistikrota/ui/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: [],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button>primary</Button>,
}
