import React, { useEffect, useState } from 'react'
import { useInterval } from '../hooks/async'
import { useAgentMobile } from '../hooks/dom'
import PerfectImage from '../image/perfect'
import DotRenderer from './dot-renderer'

type Props = {
  images: string[]
  imageAltPrefix: string
  imageTitlePrefix?: string
  imageClassName?: string
  imgLoadingClassName?: string
  pictureClassName?: string
  sizeClassName: string
  activeIndex?: number
  className?: string
  onClick?: (image: string, idx: number) => void
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showSubImages?: boolean
}

type ButtonProps = {
  position: 'left' | 'right'
  onClick: () => void
}

const CarouselButton: React.FC<ButtonProps> = ({ position, onClick }) => {
  const isMobile = useAgentMobile()
  const icon = position === 'left' ? 'bx-chevron-left' : 'bx-chevron-right'
  const left = position === 'left' ? 'left-2' : 'right-2'
  return (
    <button
      className={`${
        !isMobile ? 'flex' : 'hidden'
      } invisible absolute top-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-90 group-hover:hover:opacity-100 ${left} shadow-xs bg-third h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full border bg-opacity-95 text-gray-600 dark:bg-opacity-10 dark:text-white`}
      onClick={onClick}
    >
      <i className={`bx bx-sm ${icon}`} />
    </button>
  )
}

const Carousel: React.FC<Props> = ({
  images,
  imageTitlePrefix,
  imageAltPrefix,
  sizeClassName,
  imageClassName,
  pictureClassName,
  imgLoadingClassName = 'rounded-md',
  className,
  onClick,
  showDots = true,
  showSubImages = false,
  autoPlay = false,
  autoPlayInterval = 5000,
  activeIndex = 0,
}) => {
  const [indexes, setIndexes] = useState([0, 0, 2])
  const [currentIndex, setCurrentIndex] = useState(activeIndex)

  useInterval(
    () => {
      goToNextSlide()
    },
    autoPlay ? autoPlayInterval : null,
  )

  useEffect(() => {
    setCurrentIndex(activeIndex)
  }, [activeIndex])

  const goToPreviousSlide = () => {
    setIndexes(([fromIndex, currentIndex, toIndex]) => {
      if (currentIndex === fromIndex) {
        return [currentIndex - 1, currentIndex - 1, currentIndex + 1]
      }
      return [fromIndex, currentIndex - 1, toIndex]
    })
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNextSlide = () => {
    setIndexes(([fromIndex, currentIndex, toIndex]) => {
      if (currentIndex === toIndex) {
        return [currentIndex - 1, currentIndex + 1, currentIndex + 1]
      }

      return [fromIndex, currentIndex + 1, toIndex]
    })
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const checkRightSwipe = () => {
    if (currentIndex === 0) return
    goToPreviousSlide()
  }

  const checkLeftSwipe = () => {
    if (currentIndex === images.length - 1) return
    goToNextSlide()
  }

  const checkImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const isPictureClick =
      e.target instanceof HTMLPictureElement ||
      e.nativeEvent.composedPath().some((el) => el instanceof HTMLPictureElement)
    if ((isPictureClick || e.target instanceof HTMLImageElement || e.target === e.currentTarget) && onClick) {
      onClick(images[currentIndex], currentIndex)
    }
  }

  return (
    <div className={`group w-full ${className ? className : ''}`} onClick={checkImageClick}>
      <div className={`relative ${sizeClassName}`}>
        {images.map((img, idx) => (
          <PerfectImage
            key={idx}
            src={img}
            alt={`${imageAltPrefix}-${idx}`}
            title={imageTitlePrefix ? `${imageTitlePrefix}-${idx}` : undefined}
            isActive={idx === currentIndex}
            className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-200 ${
              idx === currentIndex ? 'opacity-100' : 'cursor-pointer opacity-0'
            } ${pictureClassName ? pictureClassName : ''}`}
            imgClassName={`rounded-md ${imageClassName ? imageClassName : ''}`}
            loadingClassName={imgLoadingClassName}
            onLeftSwipe={checkLeftSwipe}
            onRightSwipe={checkRightSwipe}
          />
        ))}
        {showDots && <DotRenderer indexes={indexes} count={images.length} onClick={(idx) => setCurrentIndex(idx)} />}
        {currentIndex !== 0 && <CarouselButton position='left' onClick={goToPreviousSlide} />}
        {currentIndex !== images.length - 1 && <CarouselButton position='right' onClick={goToNextSlide} />}
      </div>
      {showSubImages && (
        <div className='mt-2 flex justify-start gap-1 overflow-x-auto pb-2'>
          {images.map((img, idx) => (
            <div key={idx} className='max-w-12 relative h-12 max-h-12 min-h-[3rem] w-12 min-w-[3rem]'>
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
      )}
    </div>
  )
}

export default Carousel
