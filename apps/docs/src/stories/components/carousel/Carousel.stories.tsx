import { Meta, StoryObj } from '@storybook/react'
import Carousel from '@turistikrota/ui/carousel'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: [],
  argTypes: {
    images: {
      control: { type: 'array' },
      description: 'The images of the carousel',
    },
    sizeClassName: {
      control: { type: 'text' },
      description: 'The size of the carousel. Like `h-96`',
    },
    className: {
      control: { type: 'text' },
      description: 'The custom class name of the carousel',
    },
    onClick: {
      action: 'clicked',
      description: 'The click handler of the carousel',
    },
  },
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {
    sizeClassName: 'h-96 w-96 bg-third rounded-md',
    images: [
      '/images/react.png',
      '/images/js.png',
      '/images/vite.png',
      '/images/nextjs.png',
      '/images/golang.png',
      '/images/cpp.png',
      '/images/csharp.png',
      '/images/java.png',
      '/images/php.png',
      '/images/py.png',
    ],
    onClick: () => alert('clicked'),
  },
  render: (args) => <Carousel {...args} />,
}
