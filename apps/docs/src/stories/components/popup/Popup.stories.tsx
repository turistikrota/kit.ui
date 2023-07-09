import { Meta, StoryObj } from '@storybook/react'
import Popup from '@turistikrota/ui/popup'
import * as React from 'react'

const meta = {
  title: 'Components/Popup',
  component: Popup,
  tags: [],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      control: { type: 'select' },
      default: 'lg',
      defaultValue: 'lg',
      description: 'The size of the popup',
    },
    head: {
      control: { type: 'text' },
      description: 'The head of the popup',
    },
    className: {
      control: { type: 'text' },
      description: 'The custom className of the popup',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the popup',
    },
    onClose: {
      action: 'onClose',
      description: 'The onClose event of the popup',
    },
    open: {
      control: { type: 'boolean' },
      description: 'The open state of the popup',
    },
  },
} satisfies Meta<typeof Popup>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    size: 'lg',
    head: 'Popup head',
    children: 'Popup content',
    open: false,
  },
  render: PopupRenderer,
}

function PopupRenderer({ children, head, ...args }: any) {
  const [open, setOpen] = React.useState(args.open)

  React.useEffect(() => {
    setOpen(args.open)
  }, [args.open])
  return (
    <Popup {...args} open={open} onClose={() => setOpen(false)} head={<span className='text-gray-300'>{head}</span>}>
      <span className='text-gray-300'>{children}</span>
    </Popup>
  )
}
