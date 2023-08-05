import Button from '@turistikrota/ui/button'
import Modal from '@turistikrota/ui/modal'
import { useState } from 'react'

export default function ModalExample() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
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
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
    </>
  )
}
