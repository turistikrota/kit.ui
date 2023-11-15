import React from 'react'

type Props = {
  className?: string
}

const Left = ({ children }: React.PropsWithChildren) => {
  return <div className='flex items-center gap-8 text-xs text-gray-500 dark:text-gray-300'>{children}</div>
}

const Right = ({ children }: React.PropsWithChildren) => {
  return <div className='flex items-center gap-8 text-xs text-gray-500 dark:text-gray-300'>{children}</div>
}

function TopHeader({ children, className }: React.PropsWithChildren<Props>) {
  return (
    <section className={`flex h-8 w-full items-center justify-between dark:border-gray-800 ${className}`}>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4'>{children}</div>
    </section>
  )
}

TopHeader.Left = Left
TopHeader.Right = Right
export default TopHeader
