import React, { useState } from 'react'
import PerfectImage from '../image/perfect'
import DotRenderer from './dot-renderer'

type Props = {
  images: string[]
  sizeClassName: string
  className?: string
  onClick?: () => void
}

type ButtonProps = {
  position: 'left' | 'right'
  onClick: () => void
}

const CarouselButton: React.FC<ButtonProps> = ({ position, onClick }) => {
  const icon = position === 'left' ? 'bx-chevron-left' : 'bx-chevron-right'
  const left = position === 'left' ? 'left-2' : 'right-2'
  return (
    <button
      className={`hidden lg:flex absolute invisible opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-90 group-hover:hover:opacity-100 top-1/2 ${left} transform -translate-y-1/2 text-gray-600 border shadow-xs bg-third bg-opacity-95 dark:bg-opacity-10 dark:text-white w-8 h-8 rounded-full items-center justify-center`}
      onClick={onClick}
    >
      <i className={`bx bx-sm ${icon}`} />
    </button>
  )
}

const Carousel: React.FC<Props> = ({ images, sizeClassName, className, onClick }) => {
  const [indexes, setIndexes] = useState([0, 0, 2])
  const [currentIndex, setCurrentIndex] = useState(0)

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

  return (
    <div className={`w-full group ${className ? className : ''}`} onClick={onClick}>
      <div className={`relative ${sizeClassName}`}>
        {images.map((img, idx) => (
          <PerfectImage
            key={idx}
            src={img}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            imgClassName='rounded-md'
            onLeftSwipe={checkLeftSwipe}
            onRightSwipe={checkRightSwipe}
          />
        ))}
        <DotRenderer indexes={indexes} count={images.length} onClick={(idx) => setCurrentIndex(idx)} />
        {currentIndex !== 0 && <CarouselButton position='left' onClick={goToPreviousSlide} />}
        {currentIndex !== images.length - 1 && <CarouselButton position='right' onClick={goToNextSlide} />}
      </div>
    </div>
  )
}

export default Carousel
