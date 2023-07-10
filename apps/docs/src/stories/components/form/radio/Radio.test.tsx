import { fireEvent, render } from '@testing-library/react'
import Radio from '@turistikrota/ui/form/radio'

type DefaultProps = {
  variant: 'primary' | 'secondary' | 'success' | 'error' | 'warning'
  effect: 'hover' | 'ring'
  size: 'sm' | 'md' | 'lg'
  id: string
  name: string
  onChange: (checked: boolean) => void
}

describe('Radio Component', () => {
  const defaultProps: DefaultProps = {
    id: 'radio',
    name: 'radio',
    variant: 'primary',
    effect: 'ring',
    size: 'md',
    onChange: vi.fn(),
  }

  test('renders the Radio with default props', () => {
    const { getByLabelText } = render(<Radio {...defaultProps}>Radio Option</Radio>)
    const radioElement = getByLabelText('Radio Option') as HTMLInputElement

    expect(radioElement).toBeInTheDocument()
    expect(radioElement).toHaveAttribute('type', 'radio')
    expect(radioElement).not.toBeChecked()
    expect(radioElement).toBeEnabled()
  })

  test('renders the Radio with checked prop', () => {
    const props = {
      ...defaultProps,
      checked: true,
    }

    const { getByLabelText } = render(<Radio {...props}>Radio Option</Radio>)
    const radioElement = getByLabelText('Radio Option') as HTMLInputElement

    expect(radioElement).toBeInTheDocument()
    expect(radioElement).toBeChecked()
  })

  test('calls the onChange function when radio is clicked', () => {
    const { getByLabelText } = render(<Radio {...defaultProps}>Radio Option</Radio>)
    const radioElement = getByLabelText('Radio Option') as HTMLInputElement

    fireEvent.click(radioElement)

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1)
    expect(defaultProps.onChange).toHaveBeenCalledWith(true)
  })
})
