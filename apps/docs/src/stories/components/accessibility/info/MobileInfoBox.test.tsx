import { render, screen } from '@testing-library/react'
import { MobileInfoBox } from '@turistikrota/ui/accessibility/info'

vi.mock('@turistikrota/ui/hooks/dom')

describe('MobileInfoBox Component', () => {
  test('renders paragraph when isDesktop is false', async () => {
    const hooks = await import('@turistikrota/ui/hooks/dom')
    hooks.useIsDesktop = () => false
    render(<MobileInfoBox>Info Content</MobileInfoBox>)

    const paragraphElement = screen.getByText('Info Content')
    expect(paragraphElement).toBeInTheDocument()
  })
  test('does not render paragraph when isDesktop is true', async () => {
    const hooks = await import('@turistikrota/ui/hooks/dom')
    hooks.useIsDesktop = () => true
    render(<MobileInfoBox>Info Content</MobileInfoBox>)

    const paragraphElement = screen.queryByText('Info Content')
    expect(paragraphElement).toBeNull()
  })
})
