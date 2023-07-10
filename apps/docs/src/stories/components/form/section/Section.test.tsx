import { render } from '@testing-library/react'
import FormSection from '@turistikrota/ui/form/section'

describe('FormSection Component', () => {
  test('renders the FormSection component with default props', () => {
    const { getByText } = render(
      <FormSection>
        <FormSection.Head>
          <FormSection.Head.Title>Section Title</FormSection.Head.Title>
          <FormSection.Head.Subtitle>Section Subtitle</FormSection.Head.Subtitle>
        </FormSection.Head>
        <FormSection.Body>Section Body</FormSection.Body>
        <FormSection.Footer>Section Footer</FormSection.Footer>
      </FormSection>,
    )

    expect(getByText('Section Title')).toBeInTheDocument()
    expect(getByText('Section Subtitle')).toBeInTheDocument()
    expect(getByText('Section Body')).toBeInTheDocument()
    expect(getByText('Section Footer')).toBeInTheDocument()
  })

  // Add more test cases for different scenarios
})
