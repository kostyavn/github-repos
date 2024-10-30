import { type FC } from 'react'

import { Icon, HeroIconsSolid, HeroIconsOutline, type IconType, type IIconProps } from '@shared/elements/svg'

const outlinedIconNames = Object.keys(HeroIconsOutline)
const solidIconNames = Object.keys(HeroIconsSolid)
const iconOptions = [...solidIconNames, ...outlinedIconNames]

const IconsPreviewComponent: FC<IIconProps> = props => {
  const { icon } = props

  //   const filteredIcons = iconOptions?.filter(iconName => iconName?.toLowerCase()?.includes(icon?.toLowerCase()))

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    alert(`${text} скопирован`)
  }

  return (
    <div className={'grid w-full grid-cols-4 gap-12 px-10'}>
      {iconOptions?.map(icon => (
        <div
          className={'relative flex cursor-pointer flex-col items-center gap-y-2 hover:scale-110'}
          key={icon}
          onClick={() => copyToClipboard(icon)}
        >
          <Icon className={'h-6 w-6'} icon={icon as IconType} key={icon} />
          <p className={'font-medium'}>{icon}</p>
        </div>
      ))}
    </div>
  )
}

export default {
  title: 'Icons Preview Story',
  component: Icon,
  args: {
    icon: '' as IconType
  },
  argTypes: {
    icon: {
      control: 'text'
    }
  },
  decorators: [],
  render: args => <IconsPreviewComponent {...args} />
} satisfies Meta<typeof Icon>

export const IconsPreviewStory: Story<typeof Icon> = {}
