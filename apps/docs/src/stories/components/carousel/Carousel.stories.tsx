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
    imageAltPrefix: {
      control: { type: 'text' },
      description: 'The image alt prefix of the carousel',
    },
    imageTitlePrefix: {
      control: { type: 'text' },
      description: 'The image title prefix of the carousel',
    },
    activeIndex: {
      control: { type: 'number' },
      description: 'The active index of the carousel',
      defaultValue: 0,
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
    autoPlay: {
      control: { type: 'boolean' },
      description: 'The auto play of the carousel',
      defaultValue: false,
    },
    autoPlayInterval: {
      control: { type: 'number' },
      description: 'The auto play interval of the carousel',
      defaultValue: 5000,
    },
    showDots: {
      control: { type: 'boolean' },
      description: 'The show dots of the carousel',
      defaultValue: true,
    },
    showSubImages: {
      control: { type: 'boolean' },
      description: 'The show sub images of the carousel',
      defaultValue: false,
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
    imageAltPrefix: 'image',
    onClick: () => alert('clicked'),
    autoPlay: true,
  },
  render: (args) => <Carousel {...args} />,
}
