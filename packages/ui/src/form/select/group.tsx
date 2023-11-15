import React from 'react'
import Checkbox from '../checkbox'

type ClearButtonProps = {
  onClear?: () => void
  clearText: string
  clearAriaLabel?: string
}

type Props = ClearButtonProps & {
  className?: string
  title: string
  filtered?: boolean
  filter?: React.ReactNode
}

type SelectGroupType = React.FC<React.PropsWithChildren<Props>> & {
  Item: typeof Checkbox
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClear, clearText, clearAriaLabel }) => {
  return (
    <span
      className='text-primary text-sm transition-colors hover:opacity-90'
      onClick={() => onClear && onClear()}
      role='button'
      title={clearAriaLabel ?? clearText}
      aria-label={clearAriaLabel ?? clearText}
    >
      {clearText}
    </span>
  )
}

const SelectGroup: SelectGroupType = ({
  children,
  title,
  filtered = false,
  filter,
  onClear,
  className,
  clearText,
  clearAriaLabel,
}) => {
  return (
    <div className={`${className ? className : ''}`}>
      <div className='flex items-center justify-between'>
        <div className='text-lg font-bold text-gray-700 dark:text-gray-200'>{title}</div>
        {filtered && <ClearButton onClear={onClear} clearText={clearText} clearAriaLabel={clearAriaLabel} />}
      </div>
      {filter && <div className='my-4 lg:my-2'>{filter}</div>}
      <div className={`max-h-60 space-y-3 overflow-y-auto lg:space-y-2 ${!filtered ? 'mt-2 lg:mt-2' : ''}`}>
        {children}
      </div>
    </div>
  )
}

SelectGroup.Item = Checkbox
export default SelectGroup
