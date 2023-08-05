import { Meta, StoryObj } from '@storybook/react'
import FeatureCard from '@turistikrota/ui/cards/feature'

const meta = {
  title: 'Components/Feature Card',
  component: FeatureCard,
  tags: [],
  argTypes: {
    text: {
      name: 'text',
      type: { name: 'string', required: true },
      description: 'The text to display in the feature card.',
    },
    icon: {
      name: 'icon',
      type: { name: 'string', required: true },
      description: 'The icon to display in the feature card. Possible the any icon from boxicons.',
    },
    subtext: {
      name: 'subtext',
      type: { name: 'string', required: true },
      description: 'The subtext to display in the feature card. This is actually a description.',
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description:
        'The variant to display in the feature card. Possible values are: primary, success, warning, danger.',
      defaultValue: 'primary',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: [
          'primary',
          'success',
          'warning',
          'danger',
          'default',
          'secondary',
          'yellow',
          'blue',
          'green',
          'purple',
          'orange',
          'indigo',
          'teal',
        ],
      },
    },
    children: {
      name: 'children',
      type: { name: 'string', required: false },
      description: 'The children for the may be you want to add a tooltip.',
    },
  },
} satisfies Meta<typeof FeatureCard>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    text: 'Feature',
    icon: 'bx bx-star',
    subtext: 'This is a feature card.',
    variant: 'success',
    children: '',
  },
  render: ({ ...args }) => <FeatureCard {...args} />,
}
