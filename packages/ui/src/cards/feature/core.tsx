import React from 'react'
import Tooltip, { TooltipProvider } from '../../tooltip'

type Props = {
  text: string
}

export default function CoreFeatureLabel({ text }: Props) {
  return (
    <div className='absolute top-1.5 right-1 flex items-center justify-center w-8 h-8 rounded-full'>
      <TooltipProvider>
        <Tooltip content={text}>
          <i className='bx bx-sm bxs-star text-primary'></i>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
