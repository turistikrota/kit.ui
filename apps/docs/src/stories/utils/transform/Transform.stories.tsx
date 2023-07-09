import { Meta, StoryObj } from '@storybook/react'
import { toFormData } from '@turistikrota/ui/utils/transform'

const meta = {
  title: 'Utils/transform',
  argTypes: {},
} satisfies Meta<typeof toFormData>

const Template = (args: { [s: string]: any }) => {
  // Kullanım örneği
  const data = { name: 'John Doe', age: 30, email: 'johndoe@example.com' }
  const formData = toFormData(data)
  console.log([...formData.entries()])

  return <div>Check the console for the FormData output</div>
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: Template.bind({}),
}
