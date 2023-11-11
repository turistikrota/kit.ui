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
  return <div className={`flex items-center flex-grow ${className}`}>{children}</div>
}

const Right = ({ children }: React.PropsWithChildren) => {
  return <div className='flex items-center'>{children}</div>
}

const Button = ({ children, onClick, ...props }: React.PropsWithChildren<ButtonProps & ClickableProps>) => {
  return (
    <button
      onClick={onClick}
      className='p-2 flex items-center text-center justify-center text-gray-600 w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200'
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
      className='flex items-center text-center justify-center text-gray-600 w-9 h-9 bg-gray-200 rounded-md dark:text-gray-300 dark:bg-gray-700 transition-colors duration-200'
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
        className={`backdrop-blur-md w-full h-16 left-0 border-b border-gray-200 dark:border-gray-800 fixed transition-top duration-200 z-30 ${
          isFixed ? 'top-0' : 'top-8'
        }`}
      >
        <div className={`flex items-center h-full px-4 mx-auto max-w-7xl ${className ? className : 'justify-between'}`}>
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
