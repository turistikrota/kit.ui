import React from 'react'
import { FullVariant, FullVariantClasses } from '../../types'

type Props = {
  text: string
  icon: string
  subtext: string
  variant?: FullVariant
  core?: boolean
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
      className={`col-span-4 relative grid grid-cols-6 items-center px-0 py-4 rounded-md ${FullVariantClasses[variant]}`}
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
