import { Meta, StoryObj } from '@storybook/react'
import Button from '@turistikrota/ui/button'
import Input from '@turistikrota/ui/form/input'
import FormSection from '@turistikrota/ui/form/section'

const meta = {
  title: 'Components/Form/Section',
  component: FormSection,
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'The className of the form section',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the form section',
    },
  },
} satisfies Meta<typeof FormSection>

export default meta

type Story = StoryObj<typeof meta>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Playground: Story = {
  args: {},
  render: () => (
    <FormSection>
      <FormSection.Head>
        <FormSection.Head.Title>Form title</FormSection.Head.Title>
        <FormSection.Head.Subtitle>Form subtitle</FormSection.Head.Subtitle>
      </FormSection.Head>
      <FormSection.Body>
        <Input id='userName' name='userName' type='text' autoComplete='nickname' label='Form input' />
      </FormSection.Body>
      <FormSection.Footer>
        <Button block={false} htmlType='submit' disabled={true}>
          Form submitter
        </Button>
      </FormSection.Footer>
    </FormSection>
  ),
}
