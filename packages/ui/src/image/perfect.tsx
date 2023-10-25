import React, { memo, useCallback, useRef } from 'react'
import { ObjectFit, ObjectFits, PropsWithClassName } from '../types'

type Props = {
  src: string
  alt: string
  title?: string
  imgClassName?: string
  onLeftSwipe?: () => void
  onRightSwipe?: () => void
  fit?: ObjectFit
  full?: boolean
}

type DefaultHtmlProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const PerfectImage: React.FC<React.PropsWithChildren<PropsWithClassName<Props> & DefaultHtmlProps>> = ({
  className,
  src,
  alt,
  title,
  imgClassName,
  onLeftSwipe,
  onRightSwipe,
  fit = 'cover',
  full = true,
  ...rest
}) => {
  const onSwipeStart = useRef(0)

  const onSwipe = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      onSwipeStart.current = e.touches[0].clientX
    } else {
      onSwipeStart.current = 0
    }
  }, [])

  const onSwipeEnd = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (e.changedTouches.length === 1) {
        const diff = e.changedTouches[0].clientX - onSwipeStart.current
        if (diff > 100 && onRightSwipe) {
          onRightSwipe()
        } else if (diff < -100 && onLeftSwipe) {
          onLeftSwipe()
        }
      }
    },
    [onLeftSwipe, onRightSwipe],
  )

  const isFullClassNames = full === true ? 'w-full h-full' : undefined
  const pictureClassName = [isFullClassNames, ObjectFits[fit], className].filter(Boolean).join(' ')
  const imageClassName = [isFullClassNames, ObjectFits[fit], imgClassName, 'transition-opacity', 'duration-200']
    .filter(Boolean)
    .join(' ')

  return (
    <picture className={pictureClassName} onTouchStart={onSwipe} onTouchEnd={onSwipeEnd} {...rest}>
      <source srcSet={src} type='image/webp' />
      <img src={src} alt={alt} title={title} className={imageClassName} loading='lazy' />
    </picture>
  )
}

export default memo(PerfectImage)
