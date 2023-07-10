import { fireEvent, render } from '@testing-library/react'
import Input, { type InputProps } from '@turistikrota/ui/form/input'

describe('Input Component', () => {
  const defaultProps: InputProps = {
    label: 'Label',
    name: 'input',
  }

  test('renders the input with default props', () => {
    const { getByText } = render(<Input {...defaultProps} />)
    const inputElement = getByText((_, element) => element?.tagName.toLowerCase() === 'input' ?? false)

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue('')
  })

  test('renders the input with provided props', () => {
    const props: InputProps = {
      ...defaultProps,
      value: 'Input Value',
      type: 'email',
      placeholder: 'Enter your email',
    }

    const { getByText } = render(<Input {...props} />)
    const inputElement = getByText((_, element) => element?.tagName.toLowerCase() === 'input' ?? false)

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'email')
    expect(inputElement).toHaveValue('Input Value')
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your email')
  })

  test('calls the onChange callback when input value is changed', () => {
    const onChange = vi.fn()
    const { getByText } = render(<Input {...defaultProps} onChange={onChange} />)
    const inputElement = getByText((_, element) => element?.tagName.toLowerCase() === 'input' ?? false)

    fireEvent.change(inputElement, { target: { value: 'New Value' } })

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(expect.any(Object))
  })

  test('calls the onBlur callback when input loses focus', () => {
    const onBlur = vi.fn()
    const { getByText } = render(<Input {...defaultProps} onBlur={onBlur} />)
    const inputElement = getByText((_, element) => element?.tagName.toLowerCase() === 'input' ?? false)

    fireEvent.blur(inputElement)

    expect(onBlur).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledWith(expect.any(Object))
  })
})
