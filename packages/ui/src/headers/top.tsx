import React from 'react'

type Props = {
  className?: string
}

const Left = ({ children }: React.PropsWithChildren) => {
  return <div className='flex items-center text-xs gap-8 text-gray-500 dark:text-gray-300'>{children}</div>
}

const Right = ({ children }: React.PropsWithChildren) => {
  return <div className='flex items-center text-xs gap-8 text-gray-500 dark:text-gray-300'>{children}</div>
}

function TopHeader({ children, className }: React.PropsWithChildren<Props>) {
  return (
    <section className={`flex items-center justify-between w-full h-8 bg-default dark:border-gray-800 ${className}`}>
      <div className='flex items-center justify-between w-full px-4 mx-auto max-w-7xl'>{children}</div>
    </section>
  )
}

TopHeader.Left = Left
TopHeader.Right = Right
export default TopHeader
