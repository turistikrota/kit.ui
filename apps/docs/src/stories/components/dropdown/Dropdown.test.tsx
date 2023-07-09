import { fireEvent, render } from '@testing-library/react'
import Dropdown from '@turistikrota/ui/dropdown'

describe('Dropdown Component', () => {
  test('renders the component with a button', () => {
    const { getByText } = render(
      <Dropdown>
        <Dropdown.Button>Toggle Dropdown</Dropdown.Button>
      </Dropdown>,
    )
    const buttonElement = getByText('Toggle Dropdown')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('text-gray-700')
    expect(buttonElement).not.toHaveClass('text-primary')
  })

  test('toggles the dropdown overlay on button click', () => {
    const { getByText } = render(
      <Dropdown>
        <Dropdown.Button>Toggle Dropdown</Dropdown.Button>
        <Dropdown.Overlay>
          <Dropdown.OverlayItem>Item 1</Dropdown.OverlayItem>
          <Dropdown.OverlayItem>Item 2</Dropdown.OverlayItem>
        </Dropdown.Overlay>
      </Dropdown>,
    )
    const buttonElement = getByText('Toggle Dropdown')
    const overlayItemElement = getByText('Item 1')

    fireEvent.click(buttonElement)
    expect(overlayItemElement).toBeInTheDocument()

    fireEvent.click(buttonElement)
  })

  test('adds active class to button when dropdown is active', () => {
    const { getByText } = render(
      <Dropdown>
        <Dropdown.Button active>Toggle Dropdown</Dropdown.Button>
        <Dropdown.Overlay>
          <Dropdown.OverlayItem>Item 1</Dropdown.OverlayItem>
          <Dropdown.OverlayItem>Item 2</Dropdown.OverlayItem>
        </Dropdown.Overlay>
      </Dropdown>,
    )
    const buttonElement = getByText('Toggle Dropdown')

    expect(buttonElement).toHaveClass('text-primary')
    expect(buttonElement).not.toHaveClass('text-gray-700')
  })

  test('renders overlay items when dropdown is active', () => {
    const { getByText } = render(
      <Dropdown>
        <Dropdown.Button active>Toggle Dropdown</Dropdown.Button>
        <Dropdown.Overlay>
          <Dropdown.OverlayItem active>Item 1</Dropdown.OverlayItem>
          <Dropdown.OverlayItem>Item 2</Dropdown.OverlayItem>
        </Dropdown.Overlay>
      </Dropdown>,
    )
    const overlayItem1 = getByText('Item 1')
    const overlayItem2 = getByText('Item 2')

    expect(overlayItem1).toBeInTheDocument()
    expect(overlayItem1).toHaveClass('text-primary')
    expect(overlayItem2).toBeInTheDocument()
    expect(overlayItem2).not.toHaveClass('text-primary')
  })

  test('triggers onClick event when overlay item is clicked', () => {
    const handleClick = vi.fn()
    const { getByText } = render(
      <Dropdown>
        <Dropdown.Button active>Toggle Dropdown</Dropdown.Button>
        <Dropdown.Overlay>
          <Dropdown.OverlayItem onClick={handleClick}>Item 1</Dropdown.OverlayItem>
          <Dropdown.OverlayItem>Item 2</Dropdown.OverlayItem>
        </Dropdown.Overlay>
      </Dropdown>,
    )
    const overlayItem1 = getByText('Item 1')

    fireEvent.click(overlayItem1)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
