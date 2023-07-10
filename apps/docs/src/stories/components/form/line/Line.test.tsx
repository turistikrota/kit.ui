import { render } from '@testing-library/react'
import LineForm from '@turistikrota/ui/form/line'

describe('LineForm Component', () => {
  const defaultProps = {}

  test('renders the LineForm with default props', () => {
    const { container } = render(<LineForm {...defaultProps} />)
    const lineFormElement = container.firstChild

    expect(lineFormElement).toBeInTheDocument()
    expect(lineFormElement).toHaveClass('flex', 'justify-between', 'items-center')
    expect(lineFormElement).not.toHaveClass('className')
  })

  test('renders the LineForm with custom className', () => {
    const props = {
      className: 'custom-class',
    }

    const { container } = render(<LineForm {...props} />)
    const lineFormElement = container.firstChild

    expect(lineFormElement).toBeInTheDocument()
    expect(lineFormElement).toHaveClass('flex', 'justify-between', 'items-center', 'custom-class')
  })
})
