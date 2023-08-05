import { render } from '@testing-library/react'
import StickySection from '@turistikrota/ui/section/sticky'

describe('StickySection Component', () => {
  test('renders with default customWidth and customMinHeight when no props are provided', () => {
    const { container } = render(<StickySection>Content</StickySection>)
    const section = container.firstChild
    const innerDiv = section?.firstChild
    expect(section).toHaveClass('w-[300px] min-h-[700px]')
    expect(innerDiv).toHaveClass('overflow-x-hidden')
  })

  test('renders with provided customWidth and customMinHeight when props are provided', () => {
    const { container } = render(
      <StickySection customWidth='w-[400px]' customMinHeight='min-h-[500px]'>
        Content
      </StickySection>,
    )
    const section = container.firstChild
    expect(section).toHaveClass('w-[400px] min-h-[500px]')
  })

  test('renders with provided innerClassName when innerClassName prop is provided', () => {
    const { container } = render(<StickySection innerClassName='custom-inner-class'>Content</StickySection>)
    const innerDiv = container?.firstChild?.firstChild
    expect(innerDiv).toHaveClass('custom-inner-class')
  })

  test('renders with h-sticky-bar class when headerFixed is true', () => {
    vi.mock('@turistikrota/ui/hooks/header', () => ({ default: () => true }))
    const { container } = render(<StickySection>Content</StickySection>)
    const innerDiv = container.firstChild?.firstChild
    expect(innerDiv).toHaveClass('h-sticky-bar')
  })
})
