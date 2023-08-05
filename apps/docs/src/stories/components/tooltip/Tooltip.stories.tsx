import { Meta, StoryObj } from '@storybook/react'
import Tooltip, { TooltipProvider } from '@turistikrota/ui/tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: [],
  argTypes: {
    content: { control: { type: 'text' }, default: 'This is the tooltip', description: 'The content of the info box' },
    position: {
      options: ['top', 'bottom', 'left', 'right', 'auto', 'top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: { type: 'select' },
      defaultValue: 'auto',
      description: 'The position of the tooltip',
    },
    children: { control: { type: 'text' }, default: 'Hover me.', description: 'The content of the info box' },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    content: 'this is the tooltip',
    position: 'auto',
    children: 'Hover me.',
  },
  render: ({ content, children, position }) => (
    <TooltipProvider>
      <Tooltip content={<span className='dark:text-gray-200'>{content}</span>} position={position}>
        <span className='dark:text-gray-300'> {children}</span>
      </Tooltip>
    </TooltipProvider>
  ),
}
