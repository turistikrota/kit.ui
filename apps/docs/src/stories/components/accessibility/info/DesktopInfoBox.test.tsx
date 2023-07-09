import { fireEvent, render, screen } from '@testing-library/react'
import { DesktopInfoBox } from '@turistikrota/ui/accessibility/info'
import { TooltipProvider } from '@turistikrota/ui/tooltip'

vi.mock('@turistikrota/ui/hooks/dom')

describe('DesktopInfoBox Component', () => {
  test('renders tooltip when hovered', async () => {
    const hooks = await import('@turistikrota/ui/hooks/dom')
    hooks.useIsDesktop = () => true
    render(
      <TooltipProvider>
        <DesktopInfoBox>
          <span>Tooltip Content</span>
        </DesktopInfoBox>
      </TooltipProvider>,
    )

    const tooltipContent = screen.queryByText('Tooltip Content')
    expect(tooltipContent).toBeNull()

    const iconElement = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'i' && content === ''
    })

    fireEvent.mouseEnter(iconElement)

    const tooltipContentAfterHover = screen.getByText('Tooltip Content')
    expect(tooltipContentAfterHover).toBeInTheDocument()
  })

  test('does not render tooltip when not hovered', async () => {
    const hooks = await import('@turistikrota/ui/hooks/dom')
    hooks.useIsDesktop = () => true
    render(
      <TooltipProvider>
        <DesktopInfoBox>
          <span>Tooltip Content</span>
        </DesktopInfoBox>
      </TooltipProvider>,
    )

    const tooltipContent = screen.queryByText('Tooltip Content')
    expect(tooltipContent).toBeNull()
  })

  test('does not render icon when isDesktop is false', async () => {
    const hooks = await import('@turistikrota/ui/hooks/dom')
    hooks.useIsDesktop = () => false
    render(
      <TooltipProvider>
        <DesktopInfoBox>
          <span>Tooltip Content</span>
        </DesktopInfoBox>
      </TooltipProvider>,
    )

    const iconElement = screen.queryByText((content, element) => {
      return element?.tagName.toLowerCase() === 'i' && content === ''
    })
    expect(iconElement).toBeNull()
  })
})
