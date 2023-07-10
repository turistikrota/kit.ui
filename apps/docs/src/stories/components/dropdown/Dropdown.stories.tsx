import { Meta, StoryObj } from '@storybook/react'
import Dropdown from '@turistikrota/ui/dropdown'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: [],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The content of the dropdown',
    },
  },
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  args: {},
  render: () => (
    <Dropdown>
      <Dropdown.Button>Open me</Dropdown.Button>
      <Dropdown.Overlay>Content</Dropdown.Overlay>
    </Dropdown>
  ),
}

export const Full: Story = {
  args: {},
  render: () => (
    <Dropdown>
      <Dropdown.Button>Open me</Dropdown.Button>
      <Dropdown.Overlay>
        <Dropdown.OverlayItem>Item 1</Dropdown.OverlayItem>
        <Dropdown.OverlayItem active>Item 2</Dropdown.OverlayItem>
        <Dropdown.OverlayItem>Item 3</Dropdown.OverlayItem>
      </Dropdown.Overlay>
    </Dropdown>
  ),
}
