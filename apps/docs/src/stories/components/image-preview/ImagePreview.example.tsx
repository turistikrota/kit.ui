import '@turistikrota/ui/assets/animation.css'
import Carousel from '@turistikrota/ui/carousel'
import ImagePreview, { useImagePreview } from '@turistikrota/ui/image/preview'

const images: string[] = [
  '/images/react.png',
  '/images/js.png',
  '/images/vite.png',
  '/images/nextjs.png',
  '/images/golang.png',
  '/images/cpp.png',
  '/images/csharp.png',
  '/images/java.png',
  '/images/php.png',
  '/images/py.png',
]

function Example() {
  const preview = useImagePreview()

  const open = (_: string, idx: number) => {
    preview.show(idx)
  }

  return (
    <Carousel
      imageAltPrefix='image'
      images={images}
      sizeClassName='h-96 w-96 bg-third rounded-md'
      autoPlay
      onClick={open}
    />
  )
}

function WithProvider() {
  return (
    <ImagePreview altPrefix='image' list={images}>
      <Example />
    </ImagePreview>
  )
}

export default WithProvider
