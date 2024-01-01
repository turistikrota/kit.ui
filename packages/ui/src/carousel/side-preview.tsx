import React, { FC, useMemo } from 'react'
import { useIsDesktop } from '../hooks/dom'
import PerfectImage from '../image/perfect'
import { PreviewProps } from './carousel.types'

const CarouselSidePreview: FC<PreviewProps> = ({
  styles,
  images,
  imageTitlePrefix,
  currentIndex,
  setCurrentIndex,
  onClick,
}) => {
  const isDesktop = useIsDesktop()
  const max = useMemo<number>(() => (isDesktop ? 6 : 4), [isDesktop])
  const [firstImages, totalCount] = useMemo(() => {
    if (images.length > max) return [images.slice(0, max - 1), images.length]
    return [images, images.length]
  }, [images, max])

  return (
    <div className={`relative grid grid-cols-12 gap-2 ${styles ? styles.provider : ''}`}>
      {firstImages.map((img, idx) => (
        <div key={idx} className={`${styles ? styles.item : ''}`}>
          <PerfectImage
            src={img}
            full={false}
            alt={``}
            title={imageTitlePrefix ? `${imageTitlePrefix}-${idx}` : undefined}
            imgClassName='rounded-md w-full h-full'
            loadingClassName='rounded-md w-full h-full'
            className={`rounded-md object-cover transition-opacity duration-200 ${
              idx === currentIndex ? 'opacity-100' : 'cursor-pointer opacity-50'
            }`}
            onClick={(e) => {
              setCurrentIndex(idx)
              e.stopPropagation()
            }}
          />
        </div>
      ))}
      {totalCount > max && (
        <div className={`relative ${styles ? styles.item : ''}`}>
          <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 dark:bg-black'>
            <span className='text-2xl font-bold text-black dark:text-white lg:text-4xl'>{totalCount - max}+</span>
          </div>
          <PerfectImage
            src={images[max - 1]}
            full={false}
            alt={``}
            title={imageTitlePrefix ? `${imageTitlePrefix}-${5}` : undefined}
            imgClassName='rounded-md w-full h-full'
            loadingClassName='rounded-md w-full h-full'
            className={`cursor-pointer rounded-md object-cover opacity-20 transition-opacity duration-200`}
            onClick={(e) => {
              if (onClick) onClick(images[max - 1], max - 1)
              else setCurrentIndex(5)
              e.stopPropagation()
            }}
          />
        </div>
      )}
    </div>
  )
}

export default CarouselSidePreview
