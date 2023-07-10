import { Meta, StoryObj } from '@storybook/react'
import ContentLoader from '@turistikrota/ui/loader'

const meta = {
  title: 'Components/Content Loader',
  component: ContentLoader,
  tags: [],
  argTypes: {},
} satisfies Meta<typeof ContentLoader>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {},
  render: () => <ContentLoader />,
}
