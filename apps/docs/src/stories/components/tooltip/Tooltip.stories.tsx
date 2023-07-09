import { Meta, StoryObj } from '@storybook/react'
import Tooltip, { TooltipProvider } from '@turistikrota/ui/tooltip'
import { TooltipPosition } from '@turistikrota/ui/tooltip/positions'

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
      <Tooltip content={<span className='text-gray-200'>{content}</span>} position={position}>
        <span className='dark:text-gray-300'> {children}</span>
      </Tooltip>
    </TooltipProvider>
  ),
}

const createStaticWithPosition = (position: TooltipPosition): Story => ({
  args: {
    content: 'this is the tooltip',
    position,
    children: <i className='bx bx-info-circle text-gray-200' />,
  },
  render: ({ content, children, position }) => (
    <TooltipProvider>
      <Tooltip content={<span className='text-gray-200'>{content}</span>} position={position}>
        <span className='dark:text-gray-300'> {children}</span>
      </Tooltip>
    </TooltipProvider>
  ),
})

export const Top = createStaticWithPosition('top')
export const Bottom = createStaticWithPosition('bottom')
export const Left = createStaticWithPosition('left')
export const Right = createStaticWithPosition('right')
export const TopRight = createStaticWithPosition('top-right')
export const TopLeft = createStaticWithPosition('top-left')
export const BottomRight = createStaticWithPosition('bottom-right')
export const BottomLeft = createStaticWithPosition('bottom-left')
