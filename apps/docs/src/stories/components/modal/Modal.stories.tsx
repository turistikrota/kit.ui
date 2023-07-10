import { Meta, StoryObj } from '@storybook/react'
import Button from '@turistikrota/ui/button'
import Modal from '@turistikrota/ui/modal'
import React from 'react'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: [],
  argTypes: {
    shadow: {
      control: { type: 'boolean' },
      description: 'The shadow of the modal',
      defaultValue: true,
    },
    unmount: {
      control: { type: 'boolean' },
      description: 'Unmount the modal',
      defaultValue: true,
    },
    open: {
      control: { type: 'boolean' },
      description: 'Open the modal',
      defaultValue: true,
    },
    delay: {
      control: { type: 'number' },
      description: 'Delay of the modal animation',
      defaultValue: 150,
    },
    transitionClass: {
      control: { type: 'text' },
      description: 'The transition class of the modal',
      defaultValue: 'modal-scaler',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the modal',
    },
    onClose: {
      action: 'onClose',
      description: 'The close event of the modal',
    },
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const CustomContent: Story = {
  args: {
    shadow: true,
    unmount: true,
    open: false,
    delay: 150,
    transitionClass: 'modal-scaler',
    children: 'Custom content',
  },
  render: CustomContentRenderer,
}

function CustomContentRenderer({ children, ...args }: any) {
  const [open, setOpen] = React.useState(args.open)

  React.useEffect(() => {
    setOpen(args.open)
  }, [args.open])
  return (
    <Modal {...args} open={open} onClose={() => setOpen(false)}>
      <div className='bg-second h-full w-full p-4 flex items-center justify-center rounded-md'>{children}</div>
    </Modal>
  )
}

export const Playground: Story = {
  args: {
    shadow: true,
    unmount: true,
    open: false,
    delay: 150,
  },
  render: ModalRenderer,
}

function ModalRenderer(args: any) {
  const [open, setOpen] = React.useState(args.open)

  React.useEffect(() => {
    setOpen(args.open)
  }, [args.open])
  return (
    <Modal open={open} shadow={args.shadow} unmount={args.unmount} delay={args.delay} onClose={() => setOpen(false)}>
      <Modal.Head>
        <Modal.Head.Title>Modal title</Modal.Head.Title>
        <Modal.Head.Subtitle>Modal subtitle</Modal.Head.Subtitle>
        <Modal.Head.CloseButton title='Close Modal' onClose={() => setOpen(false)} />
      </Modal.Head>
      <Modal.Body>
        <div className='flex flex-col space-y-4'>
          <span className='text-gray-300'>Hello</span>
          <span className='text-gray-300'>Hello</span>
          <span className='text-gray-300'>Hello</span>
          <span className='text-gray-300'>Hello</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button block={false}>The button</Button>
      </Modal.Footer>
    </Modal>
  )
}
