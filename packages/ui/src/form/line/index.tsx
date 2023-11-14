import React from 'react'

type FormType = React.FC<React.PropsWithChildren<Props>> & {
  Left: typeof Left
  Right: typeof Right
}

type Props = {
  className?: string
}

function Left({ children }: React.PropsWithChildren) {
  return <div className='flex grow flex-col justify-start'>{children}</div>
}

function Title({ children }: React.PropsWithChildren) {
  return <div className='text-left text-lg font-bold text-gray-800 dark:text-gray-200'>{children}</div>
}

function Description({ children }: React.PropsWithChildren) {
  return <div className='text-left text-sm text-gray-600 dark:text-gray-400'>{children}</div>
}

function Right({ children }: React.PropsWithChildren) {
  return <div className='flex justify-end'>{children}</div>
}

const LineForm: FormType = ({ children, className }) => {
  return <div className={`flex items-center justify-between ${className ? className : ''}`}>{children}</div>
}

Left.Title = Title
Left.Description = Description

LineForm.Left = Left
LineForm.Right = Right

export default LineForm
