type SortableImage = {
  order: number
  url: string
}

export const mapAndSortImages = (images: SortableImage[]): string[] => {
  return images.sort((a, b) => a.order - b.order).map((image) => image.url)
}
