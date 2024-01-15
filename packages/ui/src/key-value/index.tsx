import React, { FC } from 'react'

type Props = {
  label: string
  value: string
}

const KeyValue: FC<Props> = ({ label, value }) => {
  return (
    <div className='bg-second flex flex-col rounded-md p-2'>
      <span className='text-xs font-semibold leading-tight text-gray-600 dark:text-gray-400'>{label}</span>
      <span className='text-md font-semibold'>{value}</span>
    </div>
  )
}

export default KeyValue
