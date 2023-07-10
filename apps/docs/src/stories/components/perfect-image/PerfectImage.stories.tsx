import { Meta, StoryObj } from '@storybook/react'
import PerfectImage from '@turistikrota/ui/image/perfect'

const meta = {
  title: 'Components/PerfectImage',
  component: PerfectImage,
  tags: [],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'The source of the image',
    },
    imgClassName: {
      control: { type: 'text' },
      description: 'The class name of the img element',
    },
    onLeftSwipe: {
      action: 'onLeftSwipe',
      description: 'The function to be called when the user swipes left',
    },
    onRightSwipe: {
      action: 'onRightSwipe',
      description: 'The function to be called when the user swipes right',
    },
  },
} satisfies Meta<typeof PerfectImage>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    src: '/images/vite.png',
  },
  render: ({ children, ...args }) => <PerfectImage {...args}>{children}</PerfectImage>,
}
