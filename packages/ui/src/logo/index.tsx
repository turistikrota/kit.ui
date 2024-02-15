import React from 'react'
import { FullVariant } from '../types'

type Props = {
  width?: number
  height?: number
  className?: string
  subApp?: string
  variant?: FullVariant
  vertical?: boolean
}

const Variants: Record<FullVariant, string> = {
  blue: 'text-blue-500',
  danger: 'text-red-500',
  green: 'text-green-500',
  indigo: 'text-indigo-500',
  orange: 'text-orange-500',
  primary: 'text-primary',
  purple: 'text-purple-500',
  secondary: 'text-secondary',
  success: 'text-success',
  teal: 'text-teal-500',
  warning: 'text-warning',
  yellow: 'text-yellow-500',
  default: 'text-emerald-500',
}

const Logo: React.FC<React.PropsWithChildren<Props>> = ({
  vertical = false,
  className,
  variant = 'default',
  subApp,
}) => {
  return (
    <div className={`${!vertical ? 'flex' : ''} ${className ? className : ''}`}>
      <div className='flex'>
        <span
          style={{
            fontFamily: 'Verdana, Verdana',
          }}
          className='text-secondary text-3xl'
        >
          turistik
        </span>
        <span
          style={{
            fontFamily: 'Verdana, Verdana',
          }}
          className='text-primary text-3xl'
        >
          rota
        </span>
      </div>
      {subApp && (
        <span
          style={{
            fontFamily: 'Verdana, Verdana',
          }}
          className={`${Variants[variant]} text-3xl ${vertical ? 'mx-auto' : ''}`}
        >
          {subApp}
        </span>
      )}
    </div>
  )
}

export default Logo
