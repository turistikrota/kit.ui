import React, { useEffect, useState, type ChangeEvent } from 'react'
import Condition from '../../condition'
import ErrorText from '../../text/error'
import ShowHideButton from './ShowHideButton'

type InputValue = string | number | readonly string[] | undefined

export type Size = 'sm' | 'md' | 'lg'

export type InputProps<Value extends InputValue = string> = {
  id?: string
  label: string
  name: string
  type?: string
  required?: boolean
  value?: Value
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  autoFocus?: boolean
  step?: string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  pattern?: string
  showHide?: boolean
  showText?: string
  hideText?: string
  min?: string | number
  max?: string | number
  size?: Size
  error?: string
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaInvalid?: boolean
  suffix?: React.ReactNode
}

const sizes: Record<Size, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
}

const labelSizes: Record<Size, string> = {
  sm: 'peer-placeholder-shown:text-xs peer-placeholder-shown:leading-[2.5]',
  md: 'peer-placeholder-shown:leading-[3.75]',
  lg: 'peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.3]',
}

const classes = {
  input:
    'bg-inherit border-blue-gray-200 text-blue-gray-700 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border p-2 font-sans text-sm font-normal outline-0 transition-colors duration-200 placeholder-shown:!border-t focus:border-2 focus:border-t-transparent focus:outline-0 focus-visible:outline-none focus-visible:outline-0 disabled:border-0',
  inputError:
    'invalid !border-2 border-red-500 border-t-transparent text-red-500 caret-red-500 placeholder-shown:!border-t-2 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent focus-visible:border-t-transparent',
  inputValid: 'caret-secondary focus:border-secondary-500 !border-t-0',
  label:
    "before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-autofill:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all duration-200 before:pointer-events-none before:mr-1 before:mt-[6px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all before:duration-200 after:pointer-events-none after:ml-1 after:mt-[6px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all after:duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-autofill:text-sm peer-autofill:before:border-transparent peer-autofill:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent",
  labelError:
    'text-red-500 before:border-l-2 before:border-t-2 before:border-red-500 after:border-r-2 after:border-t-2 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500  peer-focus:before:border-red-500 peer-focus:after:border-red-500',
  labelValid:
    'peer-focus:text-secondary-500 peer-focus:before:border-secondary-500 peer-focus:after:border-secondary-500',
}

function Input<Value extends InputValue = string>({
  label,
  name,
  type,
  required,
  value,
  onChange,
  onBlur,
  error,
  suffix,
  size = 'lg',
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  showHide,
  showText,
  hideText,
  ...props
}: InputProps<Value>) {
  const [inputType, setInputType] = useState(type)

  useEffect(() => {
    setInputType(type)
  }, [type])
  return (
    <>
      <div className={`relative w-full min-w-0 ${sizes[size]}`}>
        <input
          className={`${classes.input} ${error ? classes.inputError : classes.inputValid}  ${suffix ? 'pr-9' : ''}`}
          placeholder=' '
          name={name}
          type={inputType}
          required={required}
          value={value}
          onChange={(e) => {
            onChange && onChange(e)
          }}
          onBlur={(e) => {
            onBlur && onBlur(e)
          }}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid}
          {...props}
        />
        <label className={`${labelSizes[size]} ${classes.label} ${error ? classes.labelError : classes.labelValid}`}>
          {label}
        </label>
        {suffix && (
          <span className='text-blue-gray-400 absolute right-3 top-1/2 flex -translate-y-1/2 transform items-center justify-center'>
            {suffix}
          </span>
        )}
        <Condition value={type === 'password' && value !== '' && !!showHide}>
          <ShowHideButton
            show={inputType === 'password'}
            onClick={() => {
              setInputType(inputType === 'password' ? 'text' : 'password')
            }}
            hideText={hideText}
            showText={showText}
          />
        </Condition>
      </div>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}

export default Input
