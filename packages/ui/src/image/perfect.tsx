import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ObjectFit, ObjectFits, PropsWithClassName } from '../types'

type Props = {
  src: string
  alt: string
  isActive?: boolean
  title?: string
  imgClassName?: string
  loadingClassName?: string
  onLeftSwipe?: () => void
  onRightSwipe?: () => void
  onImageLoaded?: () => void
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
  onImageLoaded,
  isActive = true,
  fit = 'cover',
  full = true,
  ...rest
}) => {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)
  const onSwipeStart = useRef(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isActive || !src) return
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01 },
    )

    const currentRef = imgRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.disconnect()
      }
    }
  }, [src, isActive])

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
    if (onImageLoaded) onImageLoaded()
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
    <picture ref={imgRef} className={pictureClassName} onTouchStart={onSwipe} onTouchEnd={onSwipeEnd} {...rest}>
      {loading && (
        <span
          className={`bg-skeleton-300 dark:bg-skeleton absolute inset-0 animate-pulse ${
            loadingClassName ? loadingClassName : ''
          }`}
        />
      )}
      {isInView && (
        <>
          <source srcSet={src} type='image/webp' />
          <img src={src} alt={alt} title={title} className={imageClassName} onLoad={onImageLoad} />
        </>
      )}
    </picture>
  )
}

export default PerfectImage
