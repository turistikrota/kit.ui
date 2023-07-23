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
      className='text-sm text-primary hover:opacity-90 transition-colors'
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
      <div className='flex justify-between items-center'>
        <div className='text-lg font-bold'>{title}</div>
        {clearable && <ClearButton onClear={onClear} clearText={clearText} clearAriaLabel={clearAriaLabel} />}
      </div>
      <div>{children}</div>
    </div>
  )
}

RadioGroup.Item = Radio
export default RadioGroup
