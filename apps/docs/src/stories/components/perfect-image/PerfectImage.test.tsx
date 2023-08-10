import { fireEvent, render } from '@testing-library/react'
import PerfectImage from '@turistikrota/ui/image/perfect'

describe('PerfectImage Component', () => {
  let getByAltText: any, rerender: any
  const src = 'image.jpg'
  const altText = 'test image'

  beforeEach(() => {
    const renderResult = render(<PerfectImage alt={altText} src={src} />)
    getByAltText = renderResult.getByAltText
    rerender = renderResult.rerender
  })

  test('renders the image with provided source and classNames', () => {
    const imgClassName = 'custom-img'
    rerender(<PerfectImage alt={altText} src={src} imgClassName={imgClassName} />)

    const imageElement = getByAltText(altText)

    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', src)
    expect(imageElement).toHaveClass(imgClassName)
  })

  test('calls the onLeftSwipe callback when swiped left', () => {
    const onLeftSwipe = vi.fn()
    rerender(<PerfectImage alt={altText} src={src} onLeftSwipe={onLeftSwipe} />)

    const imageElement = getByAltText(altText)

    fireEvent.touchStart(imageElement, { touches: [{ clientX: 200 }] })
    fireEvent.touchEnd(imageElement, { changedTouches: [{ clientX: 50 }] })

    expect(onLeftSwipe).toHaveBeenCalled()
  })

  test('calls the onRightSwipe callback when swiped right', () => {
    const onRightSwipe = vi.fn()
    rerender(<PerfectImage alt={altText} src={src} onRightSwipe={onRightSwipe} />)

    const imageElement = getByAltText(altText)

    fireEvent.touchStart(imageElement, { touches: [{ clientX: 100 }] })
    fireEvent.touchEnd(imageElement, { changedTouches: [{ clientX: 300 }] })

    expect(onRightSwipe).toHaveBeenCalled()
  })

  test('has lazy loading attribute', () => {
    const imageElement = getByAltText(altText)
    expect(imageElement).toHaveAttribute('loading', 'lazy')
  })

  test('renders the image with provided alt and title', () => {
    const titleText = 'test title'
    rerender(<PerfectImage alt={altText} src={src} title={titleText} />)

    const imageElement = getByAltText(altText)

    expect(imageElement).toHaveAttribute('alt', altText)
    expect(imageElement).toHaveAttribute('title', titleText)
  })

  test('does not call onLeftSwipe callback when swipe distance is short', () => {
    const onLeftSwipe = vi.fn()
    rerender(<PerfectImage alt={altText} src={src} onLeftSwipe={onLeftSwipe} />)

    const imageElement = getByAltText(altText)

    fireEvent.touchStart(imageElement, { touches: [{ clientX: 200 }] })
    fireEvent.touchEnd(imageElement, { changedTouches: [{ clientX: 240 }] })

    expect(onLeftSwipe).not.toHaveBeenCalled()
  })

  test('does not call onRightSwipe callback when swipe distance is short', () => {
    const onRightSwipe = vi.fn()
    rerender(<PerfectImage alt={altText} src={src} onRightSwipe={onRightSwipe} />)

    const imageElement = getByAltText(altText)

    fireEvent.touchStart(imageElement, { touches: [{ clientX: 200 }] })
    fireEvent.touchEnd(imageElement, { changedTouches: [{ clientX: 160 }] })

    expect(onRightSwipe).not.toHaveBeenCalled()
  })
})
