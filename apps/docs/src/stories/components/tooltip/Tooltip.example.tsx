import Tooltip, { TooltipProvider } from '@turistikrota/ui/tooltip'
import { TooltipPosition } from '@turistikrota/ui/tooltip/positions'

type Props = {
  position?: TooltipPosition
}

export default function TooltipExample({ position = 'auto' }: Props) {
  return (
    <TooltipProvider>
      <Tooltip content={<span className='dark:text-gray-200'>this is {position} content</span>} position={position}>
        <span className='dark:text-gray-300'>Hover Me</span>
      </Tooltip>
    </TooltipProvider>
  )
}
