import { fireEvent, render } from '@testing-library/react'
import Tooltip, { TooltipProvider } from '@turistikrota/ui/tooltip'

describe('Tooltip Component', () => {
  test('renders the component with children', () => {
    const { getByText } = render(
      <TooltipProvider>
        <Tooltip content='Tooltip content'>
          <button>Hover me</button>
        </Tooltip>
      </TooltipProvider>,
    )
    const buttonElement = getByText('Hover me')

    expect(buttonElement).toBeInTheDocument()
  })

  test('shows tooltip on mouse enter and hides on mouse leave', () => {
    const { getByText, queryByText } = render(
      <TooltipProvider>
        <Tooltip content='Tooltip content'>
          <button>Hover me</button>
        </Tooltip>
      </TooltipProvider>,
    )
    const buttonElement = getByText('Hover me')

    fireEvent.mouseEnter(buttonElement)
    const tooltipContentElement = getByText('Tooltip content')
    // check hide
    expect(tooltipContentElement).toBeInTheDocument()

    fireEvent.mouseLeave(buttonElement)
    expect(queryByText('Tooltip content')).toBeInTheDocument()
  })
})
