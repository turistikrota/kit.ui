import React, { useEffect, useMemo, useState } from 'react'
import { useInterval } from '../hooks/async'
import PerfectImage from '../image/perfect'
import CarouselButton from './button'
import { CarouselStyles, CarouselVariant, CarouselVariants } from './carousel.design'
import { CarouselComponent } from './carousel.types'
import DotRenderer from './dot-renderer'

const Carousel: CarouselComponent = ({
  images,
  imageTitlePrefix,
  imageAltPrefix,
  variant = CarouselVariant.List,
  onClick,
  showDots = true,
  showPreview = false,
  autoPlay = false,
  autoPlayInterval = 5000,
  activeIndex = 0,
}) => {
  const [indexes, setIndexes] = useState([0, 0, 2])
  const [currentIndex, setCurrentIndex] = useState(activeIndex)

  const styles = useMemo<CarouselStyles>(() => CarouselVariants[variant], [variant])

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
    <div className={`group w-full ${styles.container}`} onClick={checkImageClick}>
      <div className={`relative col-span-10 ${styles.provider}`}>
        {images.map((img, idx) => (
          <PerfectImage
            key={idx}
            src={img}
            alt={`${imageAltPrefix}-${idx}`}
            title={imageTitlePrefix ? `${imageTitlePrefix}-${idx}` : undefined}
            isActive={idx === currentIndex}
            className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-200 ${
              idx === currentIndex ? 'opacity-100' : 'cursor-pointer opacity-0'
            }`}
            imgClassName={`rounded-md ${styles.item}`}
            loadingClassName={styles.itemLoading}
            onLeftSwipe={checkLeftSwipe}
            onRightSwipe={checkRightSwipe}
          />
        ))}
        {showDots && <DotRenderer indexes={indexes} count={images.length} onClick={(idx) => setCurrentIndex(idx)} />}
        {currentIndex !== 0 && <CarouselButton position='left' onClick={goToPreviousSlide} />}
        {currentIndex !== images.length - 1 && <CarouselButton position='right' onClick={goToNextSlide} />}
      </div>
      {showPreview && styles.Preview && (
        <styles.Preview
          currentIndex={currentIndex}
          imageTitlePrefix={imageTitlePrefix}
          images={images}
          styles={styles.preview}
          onClick={onClick}
          setCurrentIndex={(idx) => {
            setIndexes(([fromIndex, currentIndex, toIndex]) => {
              if (idx === currentIndex) return [idx - 1, idx, idx + 1]
              if (idx === fromIndex) return [idx - 1, idx, idx + 1]
              if (idx === toIndex) return [idx - 1, idx, idx + 1]
              return [idx - 1, idx, idx + 1]
            })
            setCurrentIndex(idx)
          }}
        />
      )}
    </div>
  )
}

Carousel.Variants = CarouselVariant

export default Carousel
