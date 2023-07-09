import { render } from '@testing-library/react'
import DisabledSection from '@turistikrota/ui/section/disabled'

describe('DisabledSection Component', () => {
  test('renders the component with default props', () => {
    const title = 'Title'
    const description = 'Description'
    const { getByText } = render(
      <DisabledSection title={title} description={description}>
        <div>Content</div>
      </DisabledSection>,
    )

    const titleElement = getByText(title)
    const descriptionElement = getByText(description)
    const contentElement = getByText('Content')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(contentElement).toBeInTheDocument()
  })

  test('renders the component with custom props', () => {
    const title = 'Custom Title'
    const description = 'Custom Description'
    const icon = 'bxl-custom-icon'
    const buttonLabel = 'Click Me'
    const { getByText } = render(
      <DisabledSection title={title} description={description} icon={icon} button={<button>{buttonLabel}</button>}>
        <div>Custom Content</div>
      </DisabledSection>,
    )

    const titleElement = getByText(title)
    const descriptionElement = getByText(description)
    const contentElement = getByText('Custom Content')
    const buttonElement = getByText(buttonLabel)
    const iconElement = getByText((_, element) => element?.classList.contains(icon) ?? false)

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(contentElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass(icon)
  })
})
