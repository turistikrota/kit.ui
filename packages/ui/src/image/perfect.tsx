import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ObjectFit, ObjectFits, PropsWithClassName } from '../types'

type Props = {
  src: string
  alt: string
  title?: string
  imgClassName?: string
  loadingClassName?: string
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
  loadingClassName,
  onLeftSwipe,
  onRightSwipe,
  fit = 'cover',
  full = true,
  ...rest
}) => {
  const onSwipeStart = useRef(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (src) {
      const img = new Image()
      img.src = src
      img.onload = () => setLoading(false)
    }
  }, [src])

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

  const onImageLoad = () => {
    setLoading(false)
  }

  const isFullClassNames = useMemo(() => (full === true ? 'w-full h-full' : undefined), [full])
  const pictureClassName = useMemo(
    () => [isFullClassNames, ObjectFits[fit], className].filter(Boolean).join(' '),
    [isFullClassNames, fit, className],
  )
  const imageClassName = useMemo(
    () =>
      [isFullClassNames, ObjectFits[fit], imgClassName, 'transition-opacity', 'duration-200'].filter(Boolean).join(' '),
    [isFullClassNames, fit, imgClassName],
  )

  return (
    <picture className={pictureClassName} onTouchStart={onSwipe} onTouchEnd={onSwipeEnd} {...rest}>
      {loading && (
        <div
          className={`absolute inset-0 bg-skeleton-300 dark:bg-skeleton animate-pulse ${
            loadingClassName ? loadingClassName : ''
          }`}
        />
      )}
      <source srcSet={src} type='image/webp' />
      <img src={src} alt={alt} title={title} className={imageClassName} loading='lazy' onLoad={onImageLoad} />
    </picture>
  )
}

export default PerfectImage
