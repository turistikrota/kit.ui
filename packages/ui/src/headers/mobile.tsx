'use client'
import React from 'react'
import useHeaderFixed, { Options as HeaderOptions } from '../hooks/header'

const withoutTopHeaderOptions: HeaderOptions = {
  checkPoint: 0,
  fixedCheckPoint: 0,
}

const withTopHeaderOptions: HeaderOptions = {
  checkPoint: 3,
  fixedCheckPoint: 3,
}

type HeaderProps = {
  className?: string
  withTopHeader?: boolean
  defaultFixed?: boolean
}

type ClickableProps = {
  onClick?: () => void
}

type ButtonProps = {
  ariaLabel?: string
  title?: string
}

const Left = ({ children }: React.PropsWithChildren) => {
  return <div className='flex items-center'>{children}</div>
}

const Fill = ({ children, className }: React.PropsWithChildren<HeaderProps>) => {
  return <div className={`flex flex-grow items-center ${className}`}>{children}</div>
}

const Right = ({ children }: React.PropsWithChildren) => {
  return <div className='flex items-center'>{children}</div>
}

const Button = ({ children, onClick, ...props }: React.PropsWithChildren<ButtonProps & ClickableProps>) => {
  return (
    <button
      onClick={onClick}
      className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 p-2 text-center text-gray-600 transition-colors duration-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
      aria-label={props.ariaLabel}
      title={props.title}
    >
      {children}
    </button>
  )
}

const Avatar = ({ children, onClick }: React.PropsWithChildren<ClickableProps>) => {
  return (
    <button
      onClick={onClick}
      className='flex h-9 w-9 items-center justify-center rounded-md bg-gray-200 text-center text-gray-600 transition-colors duration-200 dark:bg-gray-700 dark:text-gray-300'
    >
      {children}
    </button>
  )
}

function MobileHeader({
  children,
  className,
  withTopHeader = false,
  defaultFixed = false,
}: React.PropsWithChildren<HeaderProps>) {
  const isFixed = useHeaderFixed(withTopHeader ? withTopHeaderOptions : withoutTopHeaderOptions, defaultFixed)

  return (
    <>
      <header
        className={`transition-top fixed left-0 z-30 h-16 w-full border-b border-gray-200 backdrop-blur-md duration-200 dark:border-gray-800 ${
          isFixed ? 'top-0' : 'top-8'
        }`}
      >
        <div className={`mx-auto flex h-full max-w-7xl items-center px-4 ${className ? className : 'justify-between'}`}>
          {children}
        </div>
      </header>
      <div className='h-16' />
    </>
  )
}

MobileHeader.Left = Left
MobileHeader.Right = Right
MobileHeader.Avatar = Avatar
MobileHeader.Fill = Fill
MobileHeader.Button = Button

export default MobileHeader
