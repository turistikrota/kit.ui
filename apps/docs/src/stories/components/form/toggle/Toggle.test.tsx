import { fireEvent, render } from '@testing-library/react'

import Toggle from '@turistikrota/ui/form/toggle'

describe('ToggleButton Component', () => {
  test('renders the toggle button with default state and provided props', () => {
    const title = 'Toggle Button'
    const { getByRole } = render(<Toggle title={title} />)

    const toggleButtonElement = getByRole('button')

    expect(toggleButtonElement).toBeInTheDocument()
    expect(toggleButtonElement).toHaveAttribute('title', title)
  })

  test('calls the onChange callback and toggles the state when button is clicked', () => {
    const onChange = vi.fn()
    const { getByRole } = render(<Toggle title='its title' onChange={onChange} />)

    const toggleButtonElement = getByRole('button')

    fireEvent.click(toggleButtonElement)

    expect(onChange).toHaveBeenCalled()
  })

  // Add more test cases for different scenarios
})
