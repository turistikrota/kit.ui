import { render } from '@testing-library/react'
import Badge from '@turistikrota/ui/badge'
import { FormSize, FullVariantClasses } from '@turistikrota/ui/types'

const SizeClasses: Record<FormSize, string> = {
  sm: 'px-2 py-1 text-xs rounded',
  md: 'px-3 py-1.5 text-sm rounded-md',
  lg: 'px-4 py-2 text-base rounded-lg',
}

describe('Badge Component', () => {
  test('renders the badge with default variant and medium size when no variant and size props are provided', () => {
    const { container } = render(<Badge>Default Badge</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveClass('px-3')
    expect(badge).toHaveClass('py-1.5')
    expect(badge).toHaveClass('text-sm')
    expect(badge).toHaveClass(FullVariantClasses.default)
  })

  test.each(Object.keys(FullVariantClasses))('renders the badge with %p variant', (variant) => {
    const { container } = render(<Badge variant={variant}>{variant} Badge</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveClass(FullVariantClasses[variant])
  })

  test.each(['sm', 'md', 'lg'] as FormSize[])('renders the badge with %p size', (size) => {
    const { container } = render(<Badge size={size}>{size} Badge</Badge>)
    const badge = container.firstChild
    expect(badge).toHaveClass(SizeClasses[size])
  })

  test('renders the badge with custom content', () => {
    const { getByText } = render(
      <Badge variant='success' size='lg'>
        Custom Content
      </Badge>,
    )
    const customContent = getByText('Custom Content')
    expect(customContent).toBeInTheDocument()
  })
})
