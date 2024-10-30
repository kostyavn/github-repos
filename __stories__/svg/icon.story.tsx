import { Icon, HeroIconsOutline, HeroIconsSolid } from '@shared/elements/svg'

const outlinedIconNames = Object.keys(HeroIconsOutline)
const solidIconNames = Object.keys(HeroIconsSolid)
const iconOptions = [...solidIconNames, ...outlinedIconNames]

const iconSizeOptions = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg']

export default {
  title: 'SVG/Icon',
  component: Icon,
  args: {
    icon: 'outline/AcademicCapIcon',
    size: 'md',
    withScale: false
  },
  argTypes: {
    icon: {
      options: iconOptions,
      control: { type: 'select' }
    },
    size: {
      options: iconSizeOptions,
      control: { type: 'select' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Icon>

export const IconStory: Story<typeof Icon> = {}
