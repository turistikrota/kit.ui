import React from 'react'

type FormType = React.FC<React.PropsWithChildren<Props>> & {
  Left: typeof Left
  Right: typeof Right
}

type Props = {
  className?: string
}

function Left({ children, className }: React.PropsWithChildren<Props>) {
  return <div className={`flex grow flex-col justify-start ${className ? className : ''}`}>{children}</div>
}

function Title({ children, className }: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`text-center text-lg font-bold text-gray-800 dark:text-gray-200 md:text-left ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

function Description({ children, className }: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`mt-1 text-center text-sm text-gray-600 dark:text-gray-400 md:mt-0 md:text-left ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

function Right({ children, className }: React.PropsWithChildren<Props>) {
  return <div className={`flex min-w-max justify-end ${className ? className : ''}`}>{children}</div>
}

const LineForm: FormType = ({ children, className }) => {
  return (
    <div className={`flex flex-col items-center justify-between gap-2 md:flex-row ${className ? className : ''}`}>
      {children}
    </div>
  )
}

Left.Title = Title
Left.Description = Description

LineForm.Left = Left
LineForm.Right = Right

export default LineForm
