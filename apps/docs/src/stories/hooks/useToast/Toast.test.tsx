import { fireEvent, render, waitFor } from '@testing-library/react'
import { ToastListProvider, ToastProvider, useToast } from '@turistikrota/ui/toast'

describe('Toast Component', () => {
  test('renders the component with children', () => {
    const { getByText } = render(
      <ToastProvider>
        <div>Test Component</div>
      </ToastProvider>,
    )
    const testComponent = getByText('Test Component')

    expect(testComponent).toBeInTheDocument()
  })

  test('renders toast message on success toast', () => {
    const MockComponent = () => {
      const { success } = useToast()

      return <button onClick={() => success('Success message')}>Show Success Toast</button>
    }

    const { getByText, queryByText } = render(
      <ToastListProvider>
        <ToastProvider>
          <MockComponent />
        </ToastProvider>
      </ToastListProvider>,
    )

    fireEvent.click(getByText('Show Success Toast'))

    const successToast = getByText('Success message')
    expect(successToast).toBeInTheDocument()

    waitFor(() => {
      expect(queryByText('Success message')).not.toBeInTheDocument()
    })
  })
})
