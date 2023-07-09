import { Meta, StoryObj } from '@storybook/react'
import { safeStorageParse } from '@turistikrota/ui/utils/storage'

const meta = {
  title: 'Utils/storage',
  argTypes: {},
} satisfies Meta<typeof safeStorageParse>

const Template = (args: { [s: string]: any }) => {
  localStorage.setItem('myKey', JSON.stringify({ name: 'John Doe', age: 30 }))
  safeStorageParse('myKey', (value) => {
    console.log('Parsed value:', value)
  })
  return <div>Check the console for the safeStorageParse output</div>
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: Template.bind({}),
}
