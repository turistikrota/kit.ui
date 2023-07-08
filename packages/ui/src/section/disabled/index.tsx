import React from 'react'

type Variant = 'error' | 'gray' | 'maintenance' | 'vip'

type Size = 'sm' | 'md'

type Props = {
  blur?: boolean
  rounded?: boolean
  brightness?: boolean
  variant?: Variant
  size?: Size
  icon?: string
  title: string
  description: string
  button?: React.ReactNode
}

type Color = {
  content: string
  iconName: string
  icon: string
  overlay: string
}

type SizeType = {
  content: string
  stick: string
  icon: string
  title: string
  description: string
  mobileMargin: string
}

const Sizes: Record<Size, SizeType> = {
  sm: {
    content: 'p-3 gap-3',
    stick: 'pl-3',
    icon: 'bx-md',
    title: 'text-sm',
    description: 'text-xs',
    mobileMargin: 'pt-[150px] md:pt-[120px]',
  },
  md: {
    content: 'p-4 gap-4',
    stick: 'pl-4',
    icon: 'bx-2xl',
    title: 'text-base',
    description: 'text-sm',
    mobileMargin: 'pt-[250px] md:pt-[200px]',
  },
}

const Variants: Record<Variant, Color> = {
  gray: {
    content: 'bg-gray-200 dark:bg-gray-700',
    iconName: 'bx-lock-alt',
    icon: 'text-gray-500',
    overlay: 'border-gray-300 dark:border-gray-600',
  },
  error: {
    content: 'bg-red-200 dark:bg-red-900',
    iconName: 'bx-error',
    icon: 'text-red-700 dark:text-red-300',
    overlay: 'border-red-500 dark:border-red-400',
  },
  maintenance: {
    content: 'bg-yellow-200 dark:bg-yellow-900',
    iconName: 'bx-traffic-cone',
    icon: 'text-yellow-600 dark:text-yellow-300',
    overlay: 'border-yellow-500',
  },
  vip: {
    content: 'bg-vip-200 dark:bg-vip-1200',
    iconName: 'bxl-sketch',
    icon: 'text-vip-400 dark:text-vip-500',
    overlay: 'border-vip dark:border-vip-500',
  },
}

export default function DisabledSection({
  blur = true,
  rounded = true,
  brightness = true,
  variant = 'gray',
  size = 'sm',
  icon,
  title,
  description,
  children,
  button,
}: React.PropsWithChildren<Props>) {
  return (
    <>
      <div className='relative  w-full h-full text-center border-2 rounded-md '>
        <div className={`lg:hidden ${Sizes[size].mobileMargin}`}></div>
        <div className={`w-full ${blur ? 'blur-3xs' : ''} ${brightness ? 'brightness-80' : ''}`}>{children}</div>
        <span
          className={`
      absolute top-0 left-0 w-full flex flex-col items-center lg:justify-center h-full bg-opacity-20 dark:bg-opacity-20 p-4
      ${rounded ? 'rounded-md' : ''}
        ${Variants[variant].content}
      `}
        >
          <div
            className={` flex flex-col lg:flex-row border items-center justify-center rounded-md bg-second ${Variants[variant].overlay} ${Sizes[size].content}`}
          >
            <i className={`bx ${Sizes[size].icon} ${icon ?? Variants[variant].iconName} ${Variants[variant].icon}`}></i>
            <div className={`flex flex-col lg:border-l text-gray-400 dark:border-l-gray-600 ${Sizes[size].stick}`}>
              <div className={`${Sizes[size].title} text-left font-semibold text-gray-800 dark:text-gray-200`}>
                {title}
              </div>
              <p className={`${Sizes[size].description} text-left text-gray-600 dark:text-gray-300`}>{description}</p>
            </div>
          </div>
          {button}
        </span>
      </div>
    </>
  )
}
