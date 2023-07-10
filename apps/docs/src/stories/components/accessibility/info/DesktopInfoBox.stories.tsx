import { Meta, StoryObj } from '@storybook/react'
import { DesktopInfoBox, MobileInfoBox } from '@turistikrota/ui/accessibility/info'
import { TooltipProvider } from '@turistikrota/ui/tooltip'

const meta = {
  title: 'Components/Accessibility/Desktop Info Box',
  component: DesktopInfoBox,
  tags: [],
  argTypes: {
    children: { control: { type: 'text' }, default: 'Default Text', description: 'The content of the info box' },
  },
} satisfies Meta<typeof DesktopInfoBox>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: 'Default Text',
  },
  render: ({ children }) => (
    <TooltipProvider>
      <MobileInfoBox>If you are on a mobile device, you can see this text.</MobileInfoBox>
      <DesktopInfoBox>
        <span className='dark:text-gray-200'>{children}</span>
      </DesktopInfoBox>
    </TooltipProvider>
  ),
}
