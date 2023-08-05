import { render } from '@testing-library/react'
import FeatureCard from '@turistikrota/ui/cards/feature'

describe('FeatureCard Component', () => {
  test('renders the feature card with default variant when no variant prop is provided', () => {
    const { container } = render(<FeatureCard text='Feature' icon='bx-star' subtext='This is a feature card.' />)
    const featureCard = container.firstChild
    expect(featureCard).toHaveClass('bg-second')
  })

  test('renders the feature card with specified variant', () => {
    const { container } = render(
      <FeatureCard text='Feature' icon='bx-star' subtext='This is a feature card.' variant='success' />,
    )
    const featureCard = container.firstChild
    expect(featureCard).toHaveClass('bg-green-100')
    expect(featureCard).toHaveClass('text-green-500')
  })

  test('renders the feature card with children', () => {
    const { getByText } = render(
      <FeatureCard text='Feature' icon='bx-star' subtext='This is a feature card.'>
        <div>Child content</div>
      </FeatureCard>,
    )
    const childContent = getByText('Child content')
    expect(childContent).toBeInTheDocument()
  })

  test('renders the feature card with no children', () => {
    const { queryByText } = render(<FeatureCard text='Feature' icon='bx-star' subtext='This is a feature card.' />)
    const childContent = queryByText('Child content')
    expect(childContent).toBeNull()
  })
})
