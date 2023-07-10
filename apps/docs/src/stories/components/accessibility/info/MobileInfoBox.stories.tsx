import { Meta, StoryObj } from '@storybook/react'
import { MobileInfoBox } from '@turistikrota/ui/accessibility/info'

const meta = {
  title: 'Components/Accessibility/Mobile Info Box',
  component: MobileInfoBox,
  tags: [],
  argTypes: {
    children: { control: { type: 'text' }, default: 'Default Text', description: 'The content of the info box' },
  },
} satisfies Meta<typeof MobileInfoBox>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    // the args you need here will depend on your component
    children: 'Default Text',
  },
  render: ({ children }) => <MobileInfoBox>{children}</MobileInfoBox>,
}
