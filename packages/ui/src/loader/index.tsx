import React from 'react'
import { Spinner } from 'sspin'

export default function ContentLoader() {
  return (
    <div className='ease-out w-full h-full flex justify-center items-center my-60'>
      <Spinner />
    </div>
  )
}
