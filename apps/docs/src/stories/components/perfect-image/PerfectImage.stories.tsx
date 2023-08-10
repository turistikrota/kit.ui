import { Meta, StoryObj } from '@storybook/react'
import PerfectImage from '@turistikrota/ui/image/perfect'

const meta = {
  title: 'Components/Perfect Image',
  component: PerfectImage,
  tags: [],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'The source of the image',
    },
    alt: {
      control: { type: 'text' },
      description: 'The alt of the image',
    },
    full: {
      control: { type: 'boolean' },
      description: 'Whether the image should be full width',
      defaultValue: true,
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
    fit: {
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      control: { type: 'select' },
      description: 'The fit of the image',
      defaultValue: 'cover',
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
    src: '/images/react.png',
    alt: 'React',
    full: true,
  },
  render: ({ children, ...args }) => <PerfectImage {...args}>{children}</PerfectImage>,
}
