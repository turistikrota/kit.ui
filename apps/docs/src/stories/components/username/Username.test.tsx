import { render } from '@testing-library/react'
import Username from '@turistikrota/ui/username'

describe('UserName Component', () => {
  test('renders the component with default size', () => {
    const { getByText } = render(<Username>John Doe</Username>)
    const userNameElement = getByText('John Doe')

    expect(userNameElement).toBeInTheDocument()
    expect(userNameElement).toHaveClass('font-semibold')
    expect(userNameElement).toHaveClass('text-gray-900')
    expect(userNameElement).toHaveClass('dark:text-white')
    expect(userNameElement).toHaveClass('text-md')
  })

  test('renders the component with custom size', () => {
    const { getByText } = render(<Username size='lg'>John Doe</Username>)
    const userNameElement = getByText('John Doe')

    expect(userNameElement).toBeInTheDocument()
    expect(userNameElement).toHaveClass('font-semibold')
    expect(userNameElement).toHaveClass('text-gray-900')
    expect(userNameElement).toHaveClass('dark:text-white')
    expect(userNameElement).toHaveClass('text-lg')
  })
})
