import { render } from '@testing-library/react'
import Progress from '@turistikrota/ui/progress'

describe('Circle Component', () => {
  test('renders the component with default width and height', () => {
    const { getByText } = render(<Progress.Circle value={50} />)
    const progressText = getByText('50%')

    expect(progressText).toBeInTheDocument()
  })

  test('renders the component with custom width and height', () => {
    const { container } = render(<Progress.Circle value={75} width={200} height={200} />)
    const circleContainer = container.firstChild

    expect(circleContainer).toHaveStyle('width: 200px')
    expect(circleContainer).toHaveStyle('height: 200px')
  })

  // Add more test cases for different values and scenarios
})
