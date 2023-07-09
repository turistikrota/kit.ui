import { render } from '@testing-library/react'
import Condition, { ConditionCB } from '@turistikrota/ui/condition'

describe('Condition Component', () => {
  test('renders children when value is true', () => {
    const { getByText } = render(
      <Condition value={true}>
        <div>Rendered content</div>
      </Condition>,
    )
    const renderedContent = getByText('Rendered content')

    expect(renderedContent).toBeInTheDocument()
  })

  test('does not render children when value is false', () => {
    const { container } = render(
      <Condition value={false}>
        <div>Rendered content</div>
      </Condition>,
    )
    const renderedContent = container.querySelector('div')

    expect(renderedContent).toBeNull()
  })
})

describe('ConditionCB Component', () => {
  test('renders children when value is true', () => {
    const { getByText } = render(<ConditionCB value={true}>{() => <div>Rendered content</div>}</ConditionCB>)
    const renderedContent = getByText('Rendered content')

    expect(renderedContent).toBeInTheDocument()
  })

  test('does not render children when value is false', () => {
    const { container } = render(<ConditionCB value={false}>{() => <div>Rendered content</div>}</ConditionCB>)
    const renderedContent = container.querySelector('div')

    expect(renderedContent).toBeNull()
  })
})
