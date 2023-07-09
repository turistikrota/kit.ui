import { render } from '@testing-library/react'
import ContentLoader from '@turistikrota/ui/loader'

describe('ContentLoader Component', () => {
  test('renders the component with a spinner', () => {
    const { container } = render(<ContentLoader />)
    const spinnerElement = container.querySelector('.sspin')

    expect(spinnerElement).toBeInTheDocument()
  })
})
