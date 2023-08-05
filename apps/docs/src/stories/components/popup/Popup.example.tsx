import Button from '@turistikrota/ui/button'
import Popup from '@turistikrota/ui/popup'
import { useState } from 'react'

export default function PopupExample() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Popup open={open} head="it's popup head" onClose={() => setOpen(false)}>
        <div className='flex flex-col'>
          <p className='text-gray-700 text-sm mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quia, voluptatum
            voluptatem quod exercitationem quos doloribus quas voluptates quidem. Quisquam voluptatibus, quibusdam,
            quia, voluptatum voluptatem quod exercitationem quos doloribus quas voluptates quidem.
          </p>
        </div>
      </Popup>
      <Button onClick={() => setOpen(true)}>Open Popup</Button>
    </>
  )
}
