import { Meta, StoryObj } from '@storybook/react'
import LineForm from '@turistikrota/ui/form/line'
import Toggle from '@turistikrota/ui/form/toggle'

const meta = {
  title: 'Components/Form/Line',
  component: LineForm,
  tags: [],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The content of the line',
    },
  },
} satisfies Meta<typeof LineForm>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const ExampleUsage: Story = {
  render: () => (
    <LineForm className='bg-second p-4 rounded-md'>
      <LineForm.Left>
        <LineForm.Left.Title>The line form title</LineForm.Left.Title>
        <LineForm.Left.Description>The line form description content</LineForm.Left.Description>
      </LineForm.Left>
      <LineForm.Right>
        <Toggle defaultChecked={false} title='Check the form'></Toggle>
      </LineForm.Right>
    </LineForm>
  ),
}
