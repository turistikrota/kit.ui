import React, { FC, useMemo } from 'react'
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
  const [firstImages, totalCount] = useMemo(() => {
    if (images.length > 6) return [images.slice(0, 5), images.length]
    return [images, images.length]
  }, [images])

  return (
    <div className={`col-span-2 grid grid-cols-12 gap-2 ${styles ? styles.provider : ''}`}>
      {firstImages.map((img, idx) => (
        <div key={idx} className={`col-span-6 ${styles ? styles.item : ''}`}>
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
      {totalCount > 6 && (
        <div className={`relative col-span-6 ${styles ? styles.item : ''}`}>
          <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 dark:bg-black'>
            <span className='text-4xl font-bold text-black dark:text-white'>{totalCount - 5}+</span>
          </div>
          <PerfectImage
            src={images[5]}
            full={false}
            alt={``}
            title={imageTitlePrefix ? `${imageTitlePrefix}-${5}` : undefined}
            imgClassName='rounded-md w-full h-full'
            loadingClassName='rounded-md w-full h-full'
            className={`cursor-pointer rounded-md object-cover opacity-20 transition-opacity duration-200`}
            onClick={(e) => {
              if (onClick) onClick(images[5], 5)
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
