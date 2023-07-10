import { fireEvent, render } from '@testing-library/react'
import InputRange from '@turistikrota/ui/form/range'

describe('InputRange Component', () => {
  const defaultProps = {
    values: { min: 0, max: 100 },
    onChange: vi.fn(),
    minText: 'Minimum',
    maxText: 'Maximum',
  }

  test('renders the InputRange component with default props', () => {
    const { container } = render(<InputRange {...defaultProps} />)
    const minInput = container.querySelector('input[name="min"]') as HTMLInputElement
    const maxInput = container.querySelector('input[name="max"]') as HTMLInputElement

    expect(minInput).toBeInTheDocument()
    expect(minInput).toHaveAttribute('type', 'number')
    expect(minInput).toHaveValue(0)
    expect(minInput).toBeEnabled()

    expect(maxInput).toBeInTheDocument()
    expect(maxInput).toHaveAttribute('type', 'number')
    expect(maxInput).toHaveValue(100)
    expect(maxInput).toBeEnabled()
  })

  test('calls the onChange function when minimum input value changes', () => {
    const { container } = render(<InputRange {...defaultProps} />)
    const minInput = container.querySelector('input[name="min"]') as HTMLInputElement

    fireEvent.change(minInput, { target: { value: '50' } })

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onChange).toHaveBeenCalledWith({ min: 50, max: 100 })
  })

  test('calls the onChange function when maximum input value changes', () => {
    const { container } = render(<InputRange {...defaultProps} />)
    defaultProps.onChange.mockClear()
    const maxInput = container.querySelector('input[name="max"]') as HTMLInputElement

    fireEvent.change(maxInput, { target: { value: '200' } })

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onChange).toHaveBeenCalledWith({ min: 0, max: 200 })
  })
})
