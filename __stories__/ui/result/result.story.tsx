import { Result } from '@shared/elements/ui'

export default {
  title: 'UI/Result',
  component: Result,
  args: {
    type: 'empty'
  },
  argTypes: {
    type: {
      control: {
        type: 'select'
      }
    }
  }
} satisfies Meta<typeof Result>

export const ResultStory: Story<typeof Result> = {}
