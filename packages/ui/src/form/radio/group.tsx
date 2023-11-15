import React from 'react'
import Radio from '../radio'

type ClearButtonProps = {
  onClear?: () => void
  clearText: string
  clearAriaLabel?: string
}

type Props = ClearButtonProps & {
  className?: string
  title: string
  clearable?: boolean
  onClear?: () => void
}

type RadioGroupType = React.FC<React.PropsWithChildren<Props>> & {
  Item: typeof Radio
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

const RadioGroup: RadioGroupType = ({
  children,
  title,
  clearable = false,
  onClear,
  className,
  clearText,
  clearAriaLabel,
}) => {
  return (
    <div className={`${className ? className : ''}`}>
      <div className='flex items-center justify-between'>
        <div className='text-lg font-bold'>{title}</div>
        {clearable && <ClearButton onClear={onClear} clearText={clearText} clearAriaLabel={clearAriaLabel} />}
      </div>
      <div>{children}</div>
    </div>
  )
}

RadioGroup.Item = Radio
export default RadioGroup
