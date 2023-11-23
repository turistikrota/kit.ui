import React, { PropsWithChildren } from 'react'
import { ButtonVariant } from '../types'

type Size = 'normal' | 'xs' | 'sm' | 'md' | 'lg'

type Props = {
  variant?: ButtonVariant
  size?: Size
  htmlType?: 'button' | 'submit' | 'reset'
  block?: boolean
  disabled?: boolean
  className?: string
  title?: string
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-500 hover:bg-primary-400 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-900',
  vip: 'bg-vip-500 hover:bg-vip-400 focus:ring-vip-300 dark:bg-vip-600 dark:hover:bg-vip-500 dark:focus:ring-vip-900',
  secondary:
    'bg-secondary-500 hover:bg-secondary-400 focus:ring-secondary-300 dark:bg-secondary-600 dark:hover:bg-secondary-500 dark:focus:ring-secondary-900',
  success:
    'bg-green-500 hover:bg-green-400 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-900',
  error: 'bg-red-500 hover:bg-red-400 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-900',
  warning:
    'bg-orange-500 hover:bg-orange-400 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-orange-900',
  gray: 'bg-gray-500 hover:bg-gray-400 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-900',
  'gray-text':
    'text-gray-400 bg-transparent hover:bg-gray-400 dark:text-gray-500 dark:hover:bg-gray-600 focus:ring-gray-300 dark:focus:ring-gray-900',
  transparent:
    'bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent',
  opacity:
    'bg-opacity-70 bg-gray-600 dark:bg-gray-700 hover:bg-opacity-100 dark:bg-opacity-70 dark:hover:bg-opacity-100 shadow-none dark:text-gray-200 dark:hover:text-white transition-colors duration-200 focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent',
  glass:
    'bg-gray-400/5 dark:bg-white/5 hover:bg-gray-400/10 dark:hover:bg-white/10 focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent',
}

const sizes: Record<Size, string> = {
  normal: 'text-base',
  xs: 'py-0.5 px-1 text-xs',
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
}

export default function Button({
  children,
  size = 'md',
  variant = 'primary',
  htmlType = 'button',
  block = true,
  className = '',
  onClick,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      type={htmlType}
      className={`disable-highlight block rounded-md font-medium text-white shadow transition duration-200 ease-out hover:ease-in focus:outline-none focus:ring-4 focus-visible:outline-none ${
        variants[variant]
      } ${sizes[size]} ${block ? 'w-full' : ''} ${className ? className : ''} ${props.disabled ? 'opacity-50' : ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
