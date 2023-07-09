import { fireEvent, render, screen } from '@testing-library/react'
import Button from '@turistikrota/ui/button'

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click Me</Button>)

    const buttonElement = screen.getByRole('button', { name: 'Click Me' })

    expect(buttonElement).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click Me</Button>)

    const buttonElement = screen.getByRole('button', { name: 'Click Me' })
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('applies size and variant styles', () => {
    render(
      <Button size='lg' variant='secondary'>
        Large Secondary Button
      </Button>,
    )

    const buttonElement = screen.getByRole('button', { name: 'Large Secondary Button' })

    expect(buttonElement).toHaveClass('py-3 px-6 text-lg')
    expect(buttonElement).toHaveClass('bg-secondary-500 hover:bg-secondary-400')
  })

  test('applies additional className', () => {
    render(<Button className='custom-class'>Custom Button</Button>)

    const buttonElement = screen.getByRole('button', { name: 'Custom Button' })

    expect(buttonElement).toHaveClass('custom-class')
  })
})
