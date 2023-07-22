import { render, screen, fireEvent } from '@testing-library/react'
import { useImageSrc, setDefaultImageSrc } from '@turistikrota/ui/hooks/image'

const ImageComponent = () => {
  const { src, onError } = useImageSrc('/path/to/image.png')

  return <img src={src} onError={onError} alt='Image' />
}

const dummyImageSrc = '/path/to/dummy-image.png'

describe('useImageSrc Hook Tests', () => {
  beforeEach(() => {
    setDefaultImageSrc('')
  })

  it('src variable must start with the specified src', () => {
    render(<ImageComponent />)
    const imgElement = screen.getByAltText('Image')
    expect(imgElement).toHaveAttribute('src', '/path/to/image.png')
  })

  it('onError function must be called with defaultSrc', () => {
    setDefaultImageSrc(dummyImageSrc)

    render(<ImageComponent />)
    const imgElement = screen.getByAltText('Image')
    fireEvent.error(imgElement)
    expect(imgElement).toHaveAttribute('src', dummyImageSrc)
  })

  it('onError function src should not change if src and defaultSrc are the same', () => {
    setDefaultImageSrc('/path/to/image.png')
    render(<ImageComponent />)
    const imgElement = screen.getByAltText('Image')

    fireEvent.error(imgElement)
    expect(imgElement).toHaveAttribute('src', '/path/to/image.png')
  })
})
