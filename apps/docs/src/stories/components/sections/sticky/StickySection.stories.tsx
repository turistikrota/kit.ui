import { Meta, StoryObj } from '@storybook/react'
import StickySection from '@turistikrota/ui/section/sticky'

const meta = {
  title: 'Components/Section/Sticky',
  component: StickySection,
  tags: [],
  argTypes: {
    customWidth: {
      control: { type: 'string' },
      description: 'Custom width for the section',
      defaultValue: 'w-[300px] min-w-[300px] max-w-[300px]',
    },
    customMinHeight: {
      control: { type: 'string' },
      description: 'Custom min height for the section',
      defaultValue: 'min-h-[700px]',
    },
    innerClassName: {
      control: { type: 'string' },
      description: 'Custom class name for the inner div',
    },
    children: {
      control: { type: 'text' },
      description: 'Content of the section',
    },
  },
} satisfies Meta<typeof StickySection>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    customWidth: '',
    customMinHeight: '',
    innerClassName: '',
    children: 'Content',
  },
  render: ({ ...args }) => (
    <StickySection {...args}>
      <span className='text-white'>Content</span>
    </StickySection>
  ),
}
