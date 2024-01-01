import React, { PropsWithChildren } from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'error' | 'warning'
type Effect = 'hover' | 'ring'
type Size = 'sm' | 'md' | 'lg'

interface RadioProps {
  id: string
  name: string
  value?: boolean
  variant?: Variant
  effect?: Effect
  reverse?: boolean
  size?: Size
  onChange?: (value: boolean) => void
  onBlur?: (value: boolean) => void
  onClick?: (value: boolean) => void
}

const variants: Record<Variant, string> = {
  primary:
    'text-white checked:bg-primary-500 checked:border-primary-500 checked:before:bg-primary-500  before:bg-primary-500',
  secondary:
    'text-secondary-500 border-blue-gray-200 checked:border-secondary-500 checked:before:bg-secondary-500  before:bg-blue-gray-500',
  success:
    'text-success-500 border-blue-gray-200 checked:border-success-500 checked:before:bg-success-500  before:bg-blue-gray-500',
  error:
    'text-error-500 border-blue-gray-200 checked:border-error-500 checked:before:bg-error-500  before:bg-blue-gray-500',
  warning:
    'text-warning-500 border-blue-gray-200 checked:border-warning-500 checked:before:bg-warning-500  before:bg-blue-gray-500',
}

const svgVariants: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-secondary-500',
  success: 'text-success-500',
  error: 'text-error-500',
  warning: 'text-warning-500',
}

const sizes: Record<Size, string> = {
  sm: 'h4 w-4 lg:h-3 lg:w-3',
  md: 'h-6 w-6 lg:h-5 lg:w-5',
  lg: 'h-8 w-8 lg:h-7 lg:w-7',
}

const iconSizes: Record<Size, string> = {
  sm: '',
  md: 'bx-sm',
  lg: 'bx-md',
}

type EffectType = {
  label: string
  input: string
}

const effects: Record<Effect, EffectType> = {
  ring: {
    label: '',
    input:
      "relative before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10",
  },
  hover: {
    label: 'hover:bg-second transition-colors duration-200',
    input: '',
  },
}

const Radio: React.FC<PropsWithChildren<RadioProps>> = ({
  children,
  id,
  name,
  size = 'md',
  variant = 'primary',
  effect = 'ring',
  value = false,
  reverse = false,
  onChange,
  onBlur,
  onClick,
}) => {
  return (
    <label
      className={`disable-highlight flex cursor-pointer items-center rounded-md ${
        reverse ? 'flex-row-reverse justify-between' : ''
      } ${effects[effect].label} `}
      htmlFor={id}
    >
      <label className='disable-highlight relative flex cursor-pointer items-center rounded-full p-2' htmlFor={id}>
        <input
          id={id}
          name={name}
          type='radio'
          className={`disable-highlight peer cursor-pointer appearance-none rounded-full border bg-white transition-all dark:bg-inherit ${variants[variant]} ${sizes[size]} ${effects[effect].input}`}
          checked={value}
          onChange={(e) => onChange?.(e.target.checked)}
          onBlur={(e) => onBlur?.(e.target.checked)}
          onClick={() => onClick?.(!value)}
        />
        <div
          className={`pointer-events-none absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100 ${svgVariants[variant]}`}
        >
          <i className={`bx bx-check ${iconSizes[size]}`}></i>
        </div>
      </label>
      <label
        className={`disable-highlight flex cursor-pointer select-none items-center font-light text-gray-500 dark:text-gray-500`}
        htmlFor={id}
      >
        {children}
      </label>
    </label>
  )
}

export default Radio
