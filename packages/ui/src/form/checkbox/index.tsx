import React from 'react'

type Variant = 'primary' | 'secondary' | 'success' | 'error' | 'warning'
type Size = 'sm' | 'md' | 'lg'
type Effect = 'hover' | 'ring'

type Props = {
  children: React.ReactNode
  name: string
  required?: boolean
  value?: boolean
  id?: string
  error?: string
  reversed?: boolean
  effect?: Effect
  variant?: Variant
  size?: Size
  onChange?: (value: boolean) => void
  onBlur?: (value: boolean) => void
}

type EffectType = {
  label: string
  input: string
}

const effects: Record<Effect, EffectType> = {
  ring: {
    label: '',
    input:
      "relative before:content[''] before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  hover:before:opacity-10",
  },
  hover: {
    label: 'hover:bg-second transition-colors duration-200 px-2 py-1 rounded-md',
    input: '',
  },
}

const variants: Record<Variant, string> = {
  primary: 'checked:border-primary-500 checked:bg-primary-500 checked:before:bg-primary-500',
  secondary: 'checked:border-secondary-500 checked:bg-secondary-500 checked:before:bg-secondary-500',
  success: 'checked:border-success-500 checked:bg-success-500 checked:before:bg-success-500',
  error: 'checked:border-error-500 checked:bg-error-500 checked:before:bg-error-500',
  warning: 'checked:border-warning-500 checked:bg-warning-500 checked:before:bg-warning-500',
}

const sizes: Record<Size, string> = {
  sm: 'h-4 w-4 lg:h-3 lg:w-3',
  md: 'h-6 w-6 lg:h-5 lg:w-5',
  lg: 'h-8 w-8 lg:h-7 lg:w-7',
}

const svgSizes: Record<Size, string> = {
  sm: 'h-3 w-3 lg:h-2.5 lg:w-2.5',
  md: 'h-5 w-5 lg:h-4 lg:w-4',
  lg: 'h-7 w-7 lg:h-6 lg:w-6',
}

export default function Checkbox({
  children,
  name,
  required,
  value,
  onChange,
  onBlur,
  error,
  id = name,
  size = 'md',
  effect = 'ring',
  reversed = false,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <div>
      <div
        className={`flex items-center justify-between ${reversed ? 'flex-row-reverse' : ''}  ${effects[effect].label}`}
      >
        <label className='disable-highlight relative mr-3 flex cursor-pointer items-center rounded-full' htmlFor={id}>
          <input
            id={id}
            name={name}
            type='checkbox'
            className={`border-blue-gray-200 peer cursor-pointer appearance-none rounded-md border bg-white transition-all dark:bg-inherit ${variants[variant]} ${sizes[size]} ${effects[effect].input}`}
            required={required}
            checked={value}
            onChange={(e) => onChange?.(e.target.checked)}
            onBlur={(e) => onBlur?.(e.target.checked)}
            {...props}
          />
          <div className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`${svgSizes[size]}`}
              viewBox='0 0 20 20'
              fill='currentColor'
              stroke='currentColor'
              strokeWidth='1'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </label>
        <label
          className='disable-highlight mt-px flex grow cursor-pointer select-none items-center justify-between font-light text-gray-800 dark:text-gray-400'
          htmlFor={id}
        >
          {children}
        </label>
      </div>
      {error && <small className='text-xs text-red-500'>{error}</small>}
    </div>
  )
}
