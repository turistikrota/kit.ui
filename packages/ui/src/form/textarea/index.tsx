import React from 'react'
import { FormSize } from '../../types'
import { InputProps } from '../input'

type Props = InputProps<string> & {
  rows?: number
}

const sizes: Record<FormSize, string> = {
  sm: 'min-h-5',
  md: 'min-h-7',
  lg: 'min-h-9',
}

const labelSizes: Record<FormSize, string> = {
  sm: 'peer-placeholder-shown:text-xs peer-placeholder-shown:leading-[2.5]',
  md: 'peer-placeholder-shown:leading-[3.75]',
  lg: 'peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.3]',
}

export default function Textarea({
  label,
  name,
  required,
  value,
  onChange,
  onBlur,
  error,
  size = 'lg',
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  rows = 3,
  ...props
}: Props) {
  return (
    <>
      <div className={`relative w-full min-w-[200px] ${sizes[size]}`}>
        <textarea
          className={` border-blue-gray-200 text-blue-gray-700 disabled:bg-blue-gray-50 bg-default peer h-full w-full rounded-[7px] border px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-colors   focus:border-2 focus:border-t-transparent focus:outline-0 focus-visible:outline-none focus-visible:outline-0 disabled:border-0 ${
            error
              ? 'invalid border-2 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent focus-visible:border-t-transparent'
              : 'caret-secondary focus:border-secondary-500 !border-t-0'
          }`}
          placeholder=' '
          name={name}
          required={required}
          value={value}
          onChange={(e: any) => {
            onChange && onChange(e)
          }}
          onBlur={(e: any) => {
            onBlur && onBlur(e)
          }}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid}
          rows={rows}
          {...props}
        >
          {value}
        </textarea>
        <label
          className={`before:content[' '] after:content[' '] peer-autofill:text-blue-gray-500 text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-autofill:text-sm peer-autofill:before:border-transparent peer-autofill:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ${
            labelSizes[size]
          } ${
            error
              ? 'text-red-500 before:border-l-2 before:border-t-2 before:border-red-500 after:border-r-2 after:border-t-2 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500  peer-focus:before:border-red-500 peer-focus:after:border-red-500'
              : 'peer-focus:text-secondary-500 peer-focus:before:border-secondary-500 peer-focus:after:border-secondary-500'
          } `}
        >
          {label}
        </label>
      </div>
      {error && <small className='text-xs text-red-500'>{error}</small>}
    </>
  )
}
