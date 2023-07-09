import { Meta, StoryObj } from '@storybook/react'
import { DesktopInfoBox } from '@turistikrota/ui/accessibility/info'

const meta = {
  title: 'Components/Accessibility/DesktopInfoBox',
  component: DesktopInfoBox,
  tags: [],
  argTypes: {},
} satisfies Meta<typeof DesktopInfoBox>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <DesktopInfoBox>primary</DesktopInfoBox>,
}
