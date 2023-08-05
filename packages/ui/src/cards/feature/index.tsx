import React from 'react'

export type FeatureVariants =
  | 'success'
  | 'warning'
  | 'danger'
  | 'primary'
  | 'default'
  | 'secondary'
  | 'yellow'
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'indigo'
  | 'teal'

type Props = {
  text: string
  icon: string
  subtext: string
  variant?: FeatureVariants
  core?: boolean
}

export const VariantClasses: Record<FeatureVariants, string> = {
  success: 'bg-green-100 bg-opacity-50 text-green-500 dark:bg-green-500 dark:bg-opacity-10 dark:text-green-100',
  warning: 'bg-yellow-100 bg-opacity-50 text-yellow-500 dark:bg-yellow-500 dark:bg-opacity-10 dark:text-yellow-100',
  danger: 'bg-red-100 bg-opacity-50 text-red-500 dark:bg-red-500 dark:bg-opacity-10 dark:text-red-100',
  primary: 'bg-blue-100 bg-opacity-50 text-blue-500 dark:bg-blue-500 dark:bg-opacity-10 dark:text-blue-100',
  default: 'bg-second bg-opacity-50 text-second dark:bg-second dark:bg-opacity-50 dark:text-second',
  secondary: 'bg-second bg-opacity-50 text-second dark:bg-second dark:bg-opacity-50 dark:text-second',
  yellow: 'bg-yellow-100 bg-opacity-50 text-yellow-500 dark:bg-yellow-500 dark:bg-opacity-10 dark:text-yellow-100',
  blue: 'bg-blue-100 bg-opacity-50 text-blue-500 dark:bg-blue-500 dark:bg-opacity-10 dark:text-blue-100',
  green: 'bg-green-100 bg-opacity-50 text-green-500 dark:bg-green-500 dark:bg-opacity-10 dark:text-green-100',
  purple: 'bg-purple-100 bg-opacity-50 text-purple-500 dark:bg-purple-500 dark:bg-opacity-10 dark:text-purple-100',
  orange: 'bg-orange-100 bg-opacity-50 text-orange-500 dark:bg-orange-500 dark:bg-opacity-10 dark:text-orange-100',
  indigo: 'bg-indigo-100 bg-opacity-50 text-indigo-500 dark:bg-indigo-500 dark:bg-opacity-10 dark:text-indigo-100',
  teal: 'bg-teal-100 bg-opacity-50 text-teal-500 dark:bg-teal-500 dark:bg-opacity-10 dark:text-teal-100',
}

export default function FeatureCard({
  text,
  icon,
  subtext,
  children,
  variant = 'default',
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`col-span-4 relative grid grid-cols-6 items-center px-0 py-4 rounded-md ${VariantClasses[variant]}`}
    >
      <div className='col-span-1 flex items-center justify-center'>
        <i className={`${icon} bx-xl`}></i>
      </div>
      <div className='col-span-5'>
        <div className='text-2xl font-bold'>{text}</div>
        <div className='text-sm'>{subtext}</div>
      </div>
      {children}
    </div>
  )
}
