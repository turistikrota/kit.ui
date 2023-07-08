import React from 'react'

export default function ErrorText({ children }: React.PropsWithChildren) {
  return <small className='text-xs text-red-500'>{children}</small>
}
