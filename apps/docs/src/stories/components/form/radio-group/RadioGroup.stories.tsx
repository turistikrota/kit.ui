import { Meta, StoryObj } from '@storybook/react'
import RadioGroup from '@turistikrota/ui/form/radio/group'

const meta = {
  title: 'Components/Form/Radio Group',
  component: RadioGroup,
  tags: [],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the radio group',
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'If the radio group is clearable',
      defaultValue: false,
    },
    className: {
      control: { type: 'text' },
      description: 'The className of the radio group',
    },
    clearText: {
      control: { type: 'text' },
      description: 'The clear text of the radio group. This for i18n',
    },
    clearAriaLabel: {
      control: { type: 'text' },
      description: 'The clear aria label of the radio group. This for i18n and accessibility',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the radio group',
    },
    onClear: {
      action: 'onClear',
      description: 'The onClear event of the radio group',
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    clearText: 'Clear',
    title: 'Radio Group',
    clearable: true,
    clearAriaLabel: 'Clear the radio group',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item checked id='option-1' name='options' reverse>
        option 1
      </RadioGroup.Item>
      <RadioGroup.Item checked id='option-2' name='options' reverse>
        option 2
      </RadioGroup.Item>
      <RadioGroup.Item checked id='option-2' name='options' reverse>
        option 2
      </RadioGroup.Item>
    </RadioGroup>
  ),
}
