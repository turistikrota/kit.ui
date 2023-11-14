import React from 'react'
import type { FormSize } from '../../types'
import Input from '../input'

export type MinMaxValue = {
  min: number
  max: number
}

type Props = {
  values: MinMaxValue
  onChange: (values: MinMaxValue) => void
  min?: number
  max?: number
  size?: FormSize
  minText: string
  maxText: string
}

const InputRange: React.FC<Props> = ({ values, onChange, min = 0, max, size, minText, maxText }) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value)) {
      onChange({ ...values, min: value })
    }
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value)) {
      onChange({ ...values, max: value })
    }
  }

  return (
    <>
      <div className='flex w-full items-center justify-between gap-4'>
        <Input
          label={minText}
          name='min'
          type='number'
          value={values.min}
          onChange={handleMinChange}
          size={size}
          min={min}
          max={values.max > 0 ? values.max : max}
        />
        <span className='lg:hidden'>-</span>
        <Input
          label={maxText}
          name='max'
          type='number'
          value={values.max}
          size={size}
          onChange={handleMaxChange}
          min={values.min > 0 ? values.min : min}
          max={max}
        />
      </div>
    </>
  )
}

export default InputRange
