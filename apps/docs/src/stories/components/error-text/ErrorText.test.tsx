import { render } from '@testing-library/react'
import ErrorText from '@turistikrota/ui/text/error'

describe('ErrorText Component', () => {
  test('renders the component with error text', () => {
    const { getByText } = render(<ErrorText>Error occurred</ErrorText>)
    const errorTextElement = getByText('Error occurred')

    expect(errorTextElement).toBeInTheDocument()
    expect(errorTextElement).toHaveClass('text-xs')
    expect(errorTextElement).toHaveClass('text-red-500')
  })
})
