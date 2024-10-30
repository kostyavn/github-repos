import { Avatar } from '@shared/elements/ui'

export default {
  title: 'UI/Avatar',
  component: Avatar,
  args: {
    className: '',
    size: 'lg',
    src: 'https://images.dog.ceo/breeds/malinois/n02105162_10076.jpg'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['lg', 'md']
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export const AvatarStory: Story<typeof Avatar> = {}
