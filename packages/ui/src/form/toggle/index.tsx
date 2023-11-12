import React, { useState } from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'error' | 'warning'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  variant?: Variant
  size?: Size
  title: string
}

type Variants = {
  default: string
  checked: string
  circle: string
  circleChecked: string
}

type Sizes = {
  default: string
  circle: string
  circleChecked: string
}

const variants: Record<Variant, Variants> = {
  primary: {
    default: 'bg-gray-100 dark:bg-default',
    checked: 'bg-primary-500 bg-opacity-20 dark:bg-primary-500 dark:bg-opacity-20',
    circleChecked: 'bg-primary-500 dark:bg-primary-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  secondary: {
    default: 'bg-gray-100 dark:bg-default',
    checked: 'bg-secondary-500 bg-opacity-20 dark:bg-secondary-500 dark:bg-opacity-20',
    circleChecked: 'bg-secondary-500 dark:bg-secondary-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  success: {
    default: 'bg-gray-100 dark:bg-default',
    checked: 'bg-green-500 bg-opacity-20 dark:bg-green-500 dark:bg-opacity-20',
    circleChecked: 'bg-green-500 dark:bg-green-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  error: {
    default: 'bg-gray-100 dark:bg-default',
    checked: 'bg-red-500 bg-opacity-20 dark:bg-red-500 dark:bg-opacity-20',
    circleChecked: 'bg-red-500 dark:bg-red-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  warning: {
    default: 'bg-gray-100 dark:bg-default',
    checked: 'bg-orange-500 bg-opacity-20 dark:bg-orange-500 dark:bg-opacity-20',
    circleChecked: 'bg-orange-500 dark:bg-orange-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
}

const sizes: Record<Size, Sizes> = {
  sm: {
    default: 'w-10 h-5',
    circle: 'w-4 h-4',
    circleChecked: 'translate-x-5',
  },
  md: {
    default: 'w-12 h-6',
    circle: 'w-5 h-5',
    circleChecked: 'translate-x-6',
  },
  lg: {
    default: 'w-14 h-7',
    circle: 'w-6 h-6',
    circleChecked: 'translate-x-7',
  },
}

const ToggleButton: React.FC<Props> = ({
  defaultChecked = false,
  variant = 'primary',
  size = 'md',
  disabled = false,
  title,
  onChange,
}) => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleChange = () => {
    const newChecked = !checked
    setChecked(newChecked)
    if (onChange) {
      onChange(newChecked)
    }
  }

  return (
    <button
      type='button'
      className={`relative disable-highlight inline-flex items-center rounded-full transition-colors shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent ${
        sizes[size].default
      } ${checked ? variants[variant].checked : variants[variant].default}`}
      onClick={handleChange}
      disabled={disabled}
      title={title}
      aria-label={title}
    >
      <span
        className={`inline-block transform transition-transform ease-in-out rounded-full ${variants[variant].circle} ${
          sizes[size].circle
        } ${checked ? `${sizes[size].circleChecked} ${variants[variant].circleChecked}` : 'translate-x-1'}`}
      />
    </button>
  )
}

export default ToggleButton
