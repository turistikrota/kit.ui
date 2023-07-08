'use client'
import React, { useRef } from 'react'
import { PropsWithClassName } from '../types'

type Props = {
  src: string
  imgClassName?: string
  onLeftSwipe?: () => void
  onRightSwipe?: () => void
}

const PerfectImage: React.FC<React.PropsWithChildren<PropsWithClassName<Props>>> = ({
  className,
  src,
  imgClassName,
  onLeftSwipe,
  onRightSwipe,
}) => {
  const onSwipeStart = useRef(0)

  const onSwipe = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      onSwipeStart.current = e.touches[0].clientX
    } else {
      onSwipeStart.current = 0
    }
  }

  const onSwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.changedTouches.length === 1) {
      const diff = e.changedTouches[0].clientX - onSwipeStart.current
      if (diff > 100) {
        if (onRightSwipe) {
          onRightSwipe()
        }
      } else if (diff < -100) {
        if (onLeftSwipe) {
          onLeftSwipe()
        }
      }
    }
  }

  return (
    <picture
      className={`w-full h-full object-cover ${className ? className : ''}`}
      onTouchStart={onSwipe}
      onTouchEnd={onSwipeEnd}
    >
      <source srcSet={src} type='image/webp' />
      <img src={src} alt='' className={`w-full h-full object-cover ${imgClassName ? imgClassName : ''}`} />
    </picture>
  )
}

export default PerfectImage
