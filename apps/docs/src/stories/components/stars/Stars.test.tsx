import { render } from '@testing-library/react'
import Stars from '@turistikrota/ui/stars'

describe('FiveStars Component', () => {
  test('renders five full stars when star prop is 5', () => {
    const { container } = render(<Stars star={5} />)
    const fullStars = container.querySelectorAll('.bx.bxs-star.text-secondary')
    expect(fullStars.length).toBe(5)
  })

  test('renders four full stars and one half star when star prop is 4.5', () => {
    const { container } = render(<Stars star={4.5} />)
    const fullStars = container.querySelectorAll('.bx.bxs-star.text-secondary')
    const halfStar = container.querySelector('.bx.bxs-star-half.text-secondary')
    expect(fullStars.length).toBe(4)
    expect(halfStar).toBeTruthy()
  })

  test('renders three full stars, one half star, and one empty star when star prop is 3.5', () => {
    const { container } = render(<Stars star={3.5} />)
    const fullStars = container.querySelectorAll('.bx.bxs-star.text-secondary')
    const halfStar = container.querySelector('.bx.bxs-star-half.text-secondary')
    const emptyStars = container.querySelectorAll('.bx.bx-star.text-secondary')
    expect(fullStars.length).toBe(3)
    expect(halfStar).toBeTruthy()
    expect(emptyStars.length).toBe(1)
  })

  test('renders five empty stars when star prop is 0', () => {
    const { container } = render(<Stars star={0} />)
    const emptyStars = container.querySelectorAll('.bx.bx-star.text-secondary')
    expect(emptyStars.length).toBe(5)
  })

  test('renders five full stars when star prop is greater than maxStars', () => {
    const { container } = render(<Stars star={7} maxStars={5} />)
    const fullStars = container.querySelectorAll('.bx.bxs-star.text-secondary')
    expect(fullStars.length).toBe(5)
  })
})
