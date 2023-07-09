import { fireEvent, render, screen } from '@testing-library/react'
import Alert from '@turistikrota/ui/alert'

describe('Alert Component', () => {
  test('renders alert with title and description', () => {
    render(
      <Alert type='primary'>
        <Alert.Title>Title</Alert.Title>
        <Alert.Description>Description</Alert.Description>
      </Alert>,
    )

    const titleElement = screen.getByText('Title')
    const descriptionElement = screen.getByText('Description')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  test('closes alert when close button is clicked', () => {
    const handleClose = vi.fn()

    render(
      <Alert type='primary' onClose={handleClose} closable>
        <Alert.Title>Title</Alert.Title>
        <Alert.Description>Description</Alert.Description>
      </Alert>,
    )

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  test('does not render alert when show prop is false', () => {
    render(
      <Alert type='primary' show={false}>
        <Alert.Title>Title</Alert.Title>
        <Alert.Description>Description</Alert.Description>
      </Alert>,
    )

    const alertElement = screen.queryByRole('alert')

    expect(alertElement).not.toBeInTheDocument()
  })
})
