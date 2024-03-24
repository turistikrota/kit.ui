import React, { useEffect, useState } from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'error' | 'warning'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  defaultChecked?: boolean
  secondary?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  variant?: Variant
  size?: Size
  title: string
}

type Variants = {
  default: string
  secondary: string
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
    default: 'bg-default',
    secondary: 'bg-second',
    checked: 'bg-primary-500 bg-opacity-20 dark:bg-primary-500 dark:bg-opacity-20',
    circleChecked: 'bg-primary-500 dark:bg-primary-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  secondary: {
    default: 'bg-default',
    secondary: 'bg-second',
    checked: 'bg-secondary-500 bg-opacity-20 dark:bg-secondary-500 dark:bg-opacity-20',
    circleChecked: 'bg-secondary-500 dark:bg-secondary-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  success: {
    default: 'bg-default',
    secondary: 'bg-second',
    checked: 'bg-green-500 bg-opacity-20 dark:bg-green-500 dark:bg-opacity-20',
    circleChecked: 'bg-green-500 dark:bg-green-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  error: {
    default: 'bg-default',
    secondary: 'bg-second',
    checked: 'bg-red-500 bg-opacity-20 dark:bg-red-500 dark:bg-opacity-20',
    circleChecked: 'bg-red-500 dark:bg-red-500',
    circle: 'bg-gray-400 dark:bg-gray-700',
  },
  warning: {
    default: 'bg-default',
    secondary: 'bg-second',
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
  checked: checkedProp,
  variant = 'primary',
  size = 'md',
  secondary = false,
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

  useEffect(() => {
    if (checkedProp !== undefined) {
      setChecked(checkedProp)
    }
  }, [checkedProp])

  return (
    <button
      type='button'
      className={`disable-highlight relative inline-flex items-center rounded-full shadow-none transition-colors focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:ring-offset-transparent ${
        sizes[size].default
      } ${checked ? variants[variant].checked : secondary ? variants[variant].secondary : variants[variant].default}`}
      onClick={handleChange}
      disabled={disabled}
      title={title}
      aria-label={title}
    >
      <span
        className={`inline-block transform rounded-full transition-transform ease-in-out ${variants[variant].circle} ${
          sizes[size].circle
        } ${checked ? `${sizes[size].circleChecked} ${variants[variant].circleChecked}` : 'translate-x-1'}`}
      />
    </button>
  )
}

export default ToggleButton
