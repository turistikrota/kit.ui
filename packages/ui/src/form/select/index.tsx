import React from 'react'
import { FormSize } from '../../types'

type SelectType = React.FC<React.PropsWithChildren<Props>> & {
  DefaultOption: typeof DefaultOption
}

type Props = {
  label: string
  name: string
  id?: string
  size?: FormSize
  error?: string
  required?: boolean
  value?: string
  autoComplete?: string
  autoFocus?: boolean
  disabled?: boolean
  defaultValue?: string
  readOnly?: boolean
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaInvalid?: boolean
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const sizes: Record<FormSize, string> = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
}

const labelSizes: Record<FormSize, string> = {
  sm: 'peer-placeholder-shown:text-xs peer-placeholder-shown:leading-[2.5]',
  md: 'peer-placeholder-shown:leading-[3.75]',
  lg: 'peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.3]',
}

const DefaultOption: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <option value='' disabled>
      {children}
    </option>
  )
}

const Select: SelectType = ({
  children,
  size = 'lg',
  label,
  value,
  error,
  onChange,
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  ...props
}) => {
  return (
    <div className={`min-w-48 relative w-full ${sizes[size]}`}>
      <select
        className={`caret-secondary border-blue-gray-200 bg-default text-blue-gray-700 disabled:bg-blue-gray-50 peer h-full w-full rounded-[7px] border px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-colors  focus:border-2 focus:border-t-transparent focus:outline-0 focus-visible:outline-none focus-visible:outline-0 disabled:border-0
        ${
          error
            ? 'invalid border-2 border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent focus-visible:border-t-transparent'
            : 'focus:border-secondary-500 '
        }
        `}
        placeholder=' '
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid}
        {...props}
      >
        {children}
      </select>
      <label
        className={`before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-autofill:text-blue-gray-500 peer-focus:text-secondary-500 peer-focus:before:border-secondary-500 peer-focus:after:border-secondary-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r
          after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:before:border-transparent
          peer-placeholder-shown:after:border-transparent peer-autofill:text-sm peer-autofill:before:border-transparent peer-autofill:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ${
            labelSizes[size]
          } ${
            error
              ? 'peer-invalid:text-red-500 peer-invalid:before:border-l-2 peer-invalid:before:border-t-2 peer-invalid:before:border-red-500 peer-invalid:after:border-r-2 peer-invalid:after:border-t-2 peer-invalid:after:border-red-500 peer-invalid:peer-placeholder-shown:text-red-500 peer-invalid:peer-placeholder-shown:before:border-transparent peer-invalid:peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-red-500 peer-focus:after:border-red-500 peer-focus:peer-invalid:text-red-500 peer-focus:peer-invalid:before:border-red-500 peer-focus:peer-invalid:after:border-red-500'
              : ''
          } `}
      >
        {label}
      </label>
    </div>
  )
}

Select.DefaultOption = DefaultOption

export default Select
