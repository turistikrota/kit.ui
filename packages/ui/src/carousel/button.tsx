import React from 'react'
import { useAgentMobile } from '../hooks/dom'
import { CarouselButtonProps } from './carousel.types'

const CarouselButton: React.FC<CarouselButtonProps> = ({ position, onClick }) => {
  const isMobile = useAgentMobile()
  const icon = position === 'left' ? 'bx-chevron-left' : 'bx-chevron-right'
  const left = position === 'left' ? 'left-2' : 'right-2'
  return (
    <button
      className={`${
        !isMobile ? 'flex' : 'hidden'
      } invisible absolute top-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-90 group-hover:hover:opacity-100 ${left} shadow-xs bg-second h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border bg-opacity-95 text-gray-600 dark:bg-opacity-10 dark:text-white`}
      onClick={onClick}
    >
      <i className={`bx bx-sm ${icon}`} />
    </button>
  )
}

export default CarouselButton
