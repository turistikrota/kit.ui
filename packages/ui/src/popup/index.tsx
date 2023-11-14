import React from 'react'
import { Size } from '../types'

type Props = {
  children: React.ReactNode
  head?: React.ReactNode
  className?: string
  size?: Size
  onClose: () => void
  open: boolean
}

const PopupSizes: Record<Size, string> = {
  xs: 'h-popup-xs',
  sm: 'h-popup-sm',
  md: 'h-popup-md',
  lg: 'h-popup-lg',
  xl: 'h-popup-xl',
  '2xl': 'h-popup-2xl',
  '3xl': 'h-popup-3xl',
  '4xl': 'h-popup-4xl',
}

function Popup({ children, head, className, onClose, open, size = 'lg' }: Props) {
  const [isClosing, setIsClosing] = React.useState(false)

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }

  const onSwipeStart = React.useRef(0)
  const onSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      onSwipeStart.current = e.touches[0].clientY
    } else {
      onSwipeStart.current = 0
    }
  }

  const onSwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.changedTouches.length === 1) {
      const diff = e.changedTouches[0].clientY - onSwipeStart.current
      if (diff > 150) {
        handleClose()
      }
    }
  }

  const checkOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div
      className={`z-9999 backdrop-blur-xs fixed left-0 top-0 flex h-full w-full items-end justify-center bg-opacity-50 transition-opacity ${
        isClosing
          ? 'pointer-events-none opacity-0'
          : open
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      onClick={checkOutsideClick}
    >
      <div
        className={`bg-popup shadow-top rounded-t-3xl border-t shadow-slate-200 dark:shadow-gray-950 ${className} w-full min-w-0 ${
          PopupSizes[size]
        } relative border-gray-200 dark:border-gray-800 ${
          isClosing ? 'animate-fade-out-to-bottom' : open ? 'animate-fade-in-from-bottom' : ''
        }`}
        onTouchStart={onSwipe}
        onTouchEnd={onSwipeEnd}
      >
        <span className={`bg-primary absolute -top-2.5 left-1/2 h-0.5 w-10 -translate-x-1/2 transform rounded-full`} />
        {head && <div className='mb-4 px-4 pt-4'>{head}</div>}
        <div className='h-full overflow-y-auto px-4 pb-4 pt-2'>{children}</div>
      </div>
    </div>
  )
}

export default Popup
