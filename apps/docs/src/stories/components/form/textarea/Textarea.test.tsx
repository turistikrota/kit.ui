import { fireEvent, render } from '@testing-library/react'
import Textarea from '@turistikrota/ui/form/textarea'

describe('Textarea Component', () => {
  const defaultProps = {
    label: 'Textarea Label',
    name: 'textarea',
    onChange: vi.fn(),
  }

  test('renders the Textarea component with default props', () => {
    const { container } = render(<Textarea {...defaultProps} />)
    const textareaElement = container.querySelector('textarea[name="textarea"]') as HTMLTextAreaElement

    expect(textareaElement).toBeInTheDocument()
    expect(textareaElement).toHaveValue('')
    expect(textareaElement).toBeEnabled()
  })

  test('calls the onChange function when textarea value changes', () => {
    const { container } = render(<Textarea {...defaultProps} />)
    const textareaElement = container.querySelector('textarea[name="textarea"]') as HTMLTextAreaElement

    fireEvent.change(textareaElement, { target: { value: 'Textarea Value' } })

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onChange).toHaveBeenCalledWith(expect.anything())
    expect(textareaElement).toHaveValue('Textarea Value')
  })

  // Add more test cases for different scenarios
})
