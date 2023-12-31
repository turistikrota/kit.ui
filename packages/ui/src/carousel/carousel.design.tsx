import { PreviewComponent } from './carousel.types'
import CarouselSidePreview from './side-preview'
import CarouselSubPreview from './sub-preview'

export enum CarouselVariant {
  Map = 'map',
  List = 'list',
  Detail = 'detail',
  DetailHorizontal = 'detail-horizontal',
  DetailVertical = 'detail-vertical',
}

export type PreviewStyles = {
  provider: string
  item: string
}

export type CarouselStyles = {
  container: string
  provider: string
  item: string
  itemLoading: string
  preview: PreviewStyles
  Preview?: PreviewComponent
}

export const CarouselVariants: Record<CarouselVariant, CarouselStyles> = {
  [CarouselVariant.Map]: {
    container: '',
    provider: 'h-75 w-75',
    item: 'rounded-b-none',
    itemLoading: '',
    preview: {
      provider: '',
      item: '',
    },
  },
  [CarouselVariant.List]: {
    container: '',
    provider: 'h-72',
    item: 'rounded-b-none',
    itemLoading: 'rounded-t-md',
    preview: {
      provider: '',
      item: '',
    },
  },
  [CarouselVariant.DetailHorizontal]: {
    container: 'grid grid-cols-12 gap-2',
    provider: 'h-104 col-span-12 lg:col-span-9',
    item: '',
    itemLoading: '',
    preview: {
      provider: 'col-span-12 lg:col-span-3 grid-rows-1 lg:grid-rows-3',
      item: 'col-span-3 lg:col-span-6 row-span-1 lg:row-span-1',
    },
    Preview: CarouselSidePreview,
  },
  [CarouselVariant.DetailVertical]: {
    container: '',
    provider: 'h-104',
    item: '',
    itemLoading: '',
    preview: {
      provider: '',
      item: '',
    },
    Preview: CarouselSubPreview,
  },
  [CarouselVariant.Detail]: {
    container: '',
    provider: 'h-104',
    item: '',
    itemLoading: '',
    preview: {
      provider: '',
      item: '',
    },
  },
}
