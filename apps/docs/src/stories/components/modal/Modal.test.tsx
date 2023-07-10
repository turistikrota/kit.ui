import { fireEvent, render } from '@testing-library/react'
import Modal from '@turistikrota/ui/modal'

describe('Modal Component', () => {
  test('renders the modal with default props', () => {
    const handleClose = vi.fn()
    const { getByText, getByTitle } = render(
      <Modal onClose={handleClose} open>
        <Modal.Head>
          <Modal.Head.Title>Title</Modal.Head.Title>
          <Modal.Head.Subtitle>Subtitle</Modal.Head.Subtitle>
          <Modal.Head.CloseButton onClose={handleClose} title='Close' />
        </Modal.Head>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>,
    )

    const titleElement = getByText('Title')
    const subtitleElement = getByText('Subtitle')
    const closeButton = getByTitle('Close')
    const bodyElement = getByText('Body')
    const footerElement = getByText('Footer')
    const backdropElement = getByText((_, element) => element?.classList.contains('opacity-50') ?? false)
    const modalElement = getByText('Title').parentElement

    expect(titleElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
    expect(bodyElement).toBeInTheDocument()
    expect(footerElement).toBeInTheDocument()
    expect(backdropElement).toBeInTheDocument()
    expect(modalElement).toHaveClass('w-full')
  })

  test('closes the modal when close button is clicked', () => {
    const handleClose = vi.fn()
    const { getByTitle } = render(
      <Modal onClose={handleClose} open>
        <Modal.Head>
          <Modal.Head.CloseButton onClose={handleClose} title='Close' />
        </Modal.Head>
      </Modal>,
    )

    const closeButton = getByTitle('Close')
    fireEvent.click(closeButton)

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  // Add more test cases for different scenarios
})
