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
          className={` peer h-full w-full rounded-md caret-secondary border border-blue-gray-200 bg-default px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline-0 focus:border-t-transparent transition-colors  focus:border-2 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 focus-visible:outline-0 focus-visible:outline-none ${
            error
              ? 'invalid border-red-500 focus:border-red-500 text-red-500 border-t-transparent focus:border-t-transparent focus-visible:border-t-transparent border-2'
              : 'focus:border-secondary-500 '
          }  ${suffix ? 'pr-9' : ''}`}
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
        <label
          className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
          peer-autofill:text-sm peer-autofill:text-blue-gray-500 peer-autofill:before:border-transparent peer-autofill:after:border-transparent
          peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-secondary-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-secondary-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ${
            labelSizes[size]
          } ${
            error
              ? 'peer-invalid:text-red-500 peer-focus:peer-invalid:text-red-500 peer-focus:text-red-500 peer-focus:before:border-red-500 peer-invalid:before:border-red-500 peer-invalid:after:border-red-500 peer-focus:after:border-red-500 peer-invalid:before:border-t-2 peer-invalid:before:border-l-2 peer-invalid:after:border-t-2 peer-invalid:after:border-r-2 peer-invalid:peer-placeholder-shown:before:border-transparent peer-invalid:peer-placeholder-shown:after:border-transparent peer-invalid:peer-placeholder-shown:text-red-500 peer-focus:peer-invalid:before:border-red-500 peer-focus:peer-invalid:after:border-red-500'
              : ''
          }`}
        >
          {label}
        </label>
        {suffix && (
          <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-gray-400 flex items-center justify-center'>
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
