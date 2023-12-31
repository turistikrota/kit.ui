import { CarouselVariant, PreviewStyles } from './carousel.design'

export type CarouselProps = {
  images: string[]
  variant?: CarouselVariant
  imageAltPrefix: string
  imageTitlePrefix?: string
  activeIndex?: number
  onClick?: (image: string, idx: number) => void
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showPreview?: boolean
}

export type CarouselButtonProps = {
  position: 'left' | 'right'
  onClick: () => void
}

export type PreviewProps = {
  styles?: PreviewStyles
  images: string[]
  imageTitlePrefix?: string
  currentIndex: number
  setCurrentIndex: (idx: number) => void
  onClick?: (image: string, idx: number) => void
}

export type PreviewComponent = React.FC<PreviewProps>

export type CarouselComponent = React.FC<CarouselProps> & {
  Variants: typeof CarouselVariant
}
