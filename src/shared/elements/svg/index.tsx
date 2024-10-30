import * as HeroIconsOutline from '@heroicons/react/24/outline'
import * as HeroIconsSolid from '@heroicons/react/24/solid'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type FC, type MouseEvent, type SVGProps } from 'react'

const style = cva('transition-colors', {
  variants: {
    size: {
      xxxs: 'min-h-[0.5rem] min-w-[0.5rem] max-w-[0.5rem]',
      xxs: 'min-h-[0.75rem] min-w-[0.75rem] max-w-[0.75rem]',
      xs: 'min-h-[1rem] min-w-[1rem] max-w-[1rem]',
      sm: 'min-h-[1.5rem] min-w-[1.5rem] max-w-[1.5rem]',
      md: 'min-h-[2rem] min-w-[2rem] max-w-[2rem]',
      lg: 'min-h-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]'
    },
    iconWidth: {
      auto: '',
      fixed: 'justify-center'
    },
    withScale: {
      true: 'hover:scale-110',
      false: ''
    }
  },
  defaultVariants: {
    iconWidth: 'auto'
  }
})

type IconStyle = VariantProps<typeof style>

export type IconType = `solid/${keyof typeof HeroIconsSolid}` | `outline/${keyof typeof HeroIconsOutline}`

export interface IIconProps extends IconStyle, Omit<SVGProps<SVGSVGElement>, 'ref' | 'iconWidth' | 'size'> {
  /**
   *  Стили иконки
   */
  className?: ClassName
  dataTestId?: string
  /**
   * Название иконки SVG
   */
  icon: IconType
  onClick?: (e: MouseEvent<HTMLOrSVGElement>) => void
}

export const Icon: FC<IIconProps> = props => {
  const { icon, className, dataTestId, withScale = false, size, iconWidth = 'auto', ...rest } = props

  const testId = dataTestId || 'icon'

  const [heroIconsPackage, heroIcon] = icon?.split('/')

  if (heroIconsPackage && heroIcon) {
    if (heroIconsPackage === 'solid') {
      const Icon = HeroIconsSolid[heroIcon as keyof typeof HeroIconsSolid]
      return <Icon className={cx(style({ size, iconWidth, withScale }), className)} data-testid={testId} {...rest} />
    }

    if (heroIconsPackage === 'outline') {
      const Icon = HeroIconsOutline[heroIcon as keyof typeof HeroIconsOutline]
      return <Icon className={cx(style({ size, iconWidth, withScale }), className)} data-testid={testId} {...rest} />
    }
  }
}

export { HeroIconsSolid, HeroIconsOutline }
