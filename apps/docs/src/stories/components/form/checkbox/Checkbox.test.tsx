import { fireEvent, render } from '@testing-library/react'
import Checkbox from '@turistikrota/ui/form/checkbox'

describe('Checkbox Component', () => {
  test('renders the checkbox with provided label and classNames', () => {
    const label = 'Checkbox Label'
    const name = 'checkbox'
    const { getByLabelText, getByText } = render(<Checkbox name={name}>{label}</Checkbox>)

    const checkboxElement = getByLabelText(label)
    const labelElement = getByText(label)

    expect(checkboxElement).toBeInTheDocument()
    expect(checkboxElement).toHaveAttribute('name', name)
    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveTextContent(label)
  })

  test('calls the onChange callback when checkbox is clicked', () => {
    const label = 'Checkbox Label'
    const name = 'checkbox'
    const onChange = vi.fn()
    const { getByLabelText } = render(
      <Checkbox name={name} onChange={onChange}>
        {label}
      </Checkbox>,
    )

    const checkboxElement = getByLabelText(label)

    fireEvent.click(checkboxElement)

    expect(onChange).toHaveBeenCalled()
  })

  // Add more test cases for different scenarios
})
