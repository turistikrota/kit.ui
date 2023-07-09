import { Meta, StoryObj } from '@storybook/react'
import { Locales } from '@turistikrota/ui/types'
import { sort } from '@turistikrota/ui/utils/sort'

const meta = {
  title: 'Utils/sort',
  argTypes: [
    {
      name: 'locale',
      description: 'The locale to use for sorting',
      control: { type: 'select' },
      options: ['en', 'es'],
      defaultValue: 'en',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en' },
      },
    },
    {
      name: 'arr',
      description: 'The array to sort',
      control: { type: 'array' },
      defaultValue: ['a', 'c', 'b'],
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '["a", "c", "b"]' },
      },
    },
  ],
} satisfies Meta<typeof sort>

const Template = (locale: Locales, arr: string[]) => {
  console.log('Sorted array:', sort(arr, locale as Locales))

  return <div>Check the console for the sorted data</div>
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => Template('en' as Locales, ['a', 'c', 'b']),
}
