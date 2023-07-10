import { fireEvent, render } from '@testing-library/react'
import PerfectImage from '@turistikrota/ui/image/perfect'

describe('PerfectImage Component', () => {
  test('renders the image with provided source and classNames', () => {
    const src = 'image.jpg'
    const imgClassName = 'custom-img'
    const { getByAltText } = render(<PerfectImage src={src} imgClassName={imgClassName} />)

    const imageElement = getByAltText('')

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', src)
    expect(imageElement).toHaveClass(imgClassName)
  })

  test('calls the onLeftSwipe callback when swiped left', () => {
    const src = 'image.jpg'
    const onLeftSwipe = vi.fn()
    const { getByAltText } = render(<PerfectImage src={src} onLeftSwipe={onLeftSwipe} />)

    const imageElement = getByAltText('')

    fireEvent.touchStart(imageElement, { touches: [{ clientX: 200 }] })
    fireEvent.touchEnd(imageElement, { changedTouches: [{ clientX: 50 }] })

    expect(onLeftSwipe).toHaveBeenCalled()
  })

  test('calls the onRightSwipe callback when swiped right', () => {
    const src = 'image.jpg'
    const onRightSwipe = vi.fn()
    const { getByAltText } = render(<PerfectImage src={src} onRightSwipe={onRightSwipe} />)

    const imageElement = getByAltText('')

    fireEvent.touchStart(imageElement, { touches: [{ clientX: 100 }] })
    fireEvent.touchEnd(imageElement, { changedTouches: [{ clientX: 300 }] })

    expect(onRightSwipe).toHaveBeenCalled()
  })

  // Add more test cases for different scenarios
})
