import { fireEvent, render } from '@testing-library/react'
import Select from '@turistikrota/ui/form/select'

describe('Select Component', () => {
  const defaultProps = {
    label: 'Select Option',
    name: 'select',
    onChange: vi.fn(),
  }

  test('renders the Select component with default props', () => {
    const { container } = render(<Select {...defaultProps} />)
    const selectElement = container.querySelector('select[name="select"]') as HTMLSelectElement

    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toBeEnabled()
  })

  test('calls the onChange function when select value changes', () => {
    const { container } = render(<Select {...defaultProps} />)
    const selectElement = container.querySelector('select[name="select"]') as HTMLSelectElement

    fireEvent.change(selectElement, { target: { value: 'option1' } })

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onChange).toHaveBeenCalledWith(expect.anything())
  })

  // Add more test cases for different scenarios
})
