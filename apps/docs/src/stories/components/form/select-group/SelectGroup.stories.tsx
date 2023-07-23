import { Meta, StoryObj } from '@storybook/react'
import SelectGroup from '@turistikrota/ui/form/select/group'

const meta = {
  title: 'Components/Form/Select Group',
  component: SelectGroup,
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'The className of the select group. This is used for tailwindcss',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the select group',
    },
    filtered: {
      control: { type: 'boolean' },
      description: 'If the select group is filtered',
      defaultValue: false,
    },
    filter: {
      control: { type: 'text' },
      description: "The filter of the select group. It's React Node",
    },
    clearText: {
      control: { type: 'text' },
      description: 'The clear text of the select group. This for i18n',
    },
    clearAriaLabel: {
      control: { type: 'text' },
      description: 'The clear aria label of the select group. This for i18n and accessibility',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the select group',
    },
    onClear: {
      action: 'onClear',
      description: 'The onClear event of the select group',
    },
  },
} satisfies Meta<typeof SelectGroup>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    clearText: 'Clear',
    title: 'Select Group',
    filtered: true,
    clearAriaLabel: 'Clear the select group',
  },
  render: (args) => (
    <SelectGroup {...args}>
      <SelectGroup.Item name='select-item' id='select-item-1' reversed>
        Select 1
      </SelectGroup.Item>
      <SelectGroup.Item name='select-item' id='select-item-2' value reversed>
        Select 2
      </SelectGroup.Item>
      <SelectGroup.Item name='select-item' id='select-item-3' reversed>
        Select 3
      </SelectGroup.Item>
    </SelectGroup>
  ),
}
