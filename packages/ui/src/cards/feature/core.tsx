import React from 'react'
import Tooltip, { TooltipProvider } from '../../tooltip'

type Props = {
  text: string
}

export default function CoreFeatureLabel({ text }: Props) {
  return (
    <div className='absolute right-1 top-1.5 flex h-8 w-8 items-center justify-center rounded-full'>
      <TooltipProvider>
        <Tooltip content={text}>
          <i className='bx bx-sm bxs-star text-primary'></i>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
