import React, { FC } from 'react'
import PerfectImage from '../image/perfect'
import { PreviewProps } from './carousel.types'

const CarouselSubPreview: FC<PreviewProps> = ({ styles, images, imageTitlePrefix, currentIndex, setCurrentIndex }) => {
  return (
    <div className={`mt-2 flex justify-start gap-1 overflow-x-auto pb-2 ${styles ? styles.provider : ''}`}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`max-w-12 relative h-12 max-h-12 min-h-[3rem] w-12 min-w-[3rem] ${styles ? styles.item : ''}`}
        >
          <PerfectImage
            src={img}
            full={false}
            alt={``}
            title={imageTitlePrefix ? `${imageTitlePrefix}-${idx}` : undefined}
            imgClassName='rounded-md w-full h-full'
            loadingClassName='rounded-md w-full h-full'
            className={`max-w-12 h-12 max-h-12 min-h-[3rem] w-12 min-w-[3rem] rounded-md object-cover transition-opacity duration-200 ${
              idx === currentIndex ? 'opacity-100' : 'cursor-pointer opacity-50'
            }`}
            onClick={(e) => {
              setCurrentIndex(idx)
              e.stopPropagation()
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default CarouselSubPreview
