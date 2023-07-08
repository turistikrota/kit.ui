import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type Props = {
  value: number
  width?: number
  height?: number
}

function Circle({ value, width = 100, height = 100 }: Props) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <CircularProgressbar value={value} text={`${value}%`} />
    </div>
  )
}

function Progress({ value }: Props) {
  return (
    <div className='relative'>
      <progress className='w-full' value={value} max='100'>
        {value}%
      </progress>
      <span className='absolute top-0' style={{ left: `${value}%` }}>
        {value}%
      </span>
    </div>
  )
}

Progress.Circle = Circle

export default Progress
