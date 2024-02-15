import React, { FC } from 'react'

type Props = {
  label: string
  value: string
  line?: number
}

const Lines: string[] = ['line-clamp-1', 'line-clamp-2', 'line-clamp-3', 'line-clamp-4', 'line-clamp-5', 'line-clamp-6']

const KeyValue: FC<Props> = ({ label, value, line = 0 }) => {
  return (
    <div className='bg-second flex flex-col rounded-md p-2'>
      <span className='text-xs font-semibold leading-tight text-gray-600 dark:text-gray-400'>{label}</span>
      <span className={`text-md font-semibold ${line < 6 ? Lines[line] : 'line-clamp-6'}`}>{value}</span>
    </div>
  )
}

export default KeyValue
