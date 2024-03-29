import React from 'react'
import { FormSize, FullSolidVariantClasses, FullVariant, FullVariantClasses } from '../types'

type Props = {
  variant?: FullVariant
  className?: string
  size?: FormSize
  solid?: boolean
}

const SizeClasses: Record<FormSize, string> = {
  sm: 'px-2 py-1 text-xs rounded',
  md: 'px-3 py-1.5 text-sm rounded-md',
  lg: 'px-4 py-2 text-base rounded-lg',
}

const Badge: React.FC<React.PropsWithChildren<Props>> = ({
  variant = 'default',
  size = 'md',
  solid = false,
  className,
  children,
}) => {
  return (
    <span
      className={`inline-flex items-center font-semibold ${SizeClasses[size]} ${
        solid ? FullSolidVariantClasses[variant] : FullVariantClasses[variant]
      } ${className ? className : ''}`}
    >
      {children}
    </span>
  )
}

export default Badge
