import Button from '../button'
import React, { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
  actions?: React.ReactNode
}>

export type LinkProps = PropsWithChildren<{
  href: string
  className?: string
}>

type ActionProps = PropsWithChildren<{
  href: string
  icon?: string
  Link?: FC<PropsWithChildren<LinkProps>>
}>

type ItemProps = PropsWithChildren<{
  currentPath?: string
  href?: string
  icon?: string
  Link?: FC<PropsWithChildren<LinkProps>>
}>

type BreadcrumbType = FC<Props> & {
  Action: FC<ActionProps>
  Item: FC<ItemProps>
  Link: FC<LinkProps>
}

const NativeLink: FC<LinkProps> = ({ href, className, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

const Action: FC<ActionProps> = ({ href, children, icon, Link = NativeLink }) => {
  return (
    <div className='flex items-center justify-end px-2 py-2'>
      <Link href={href}>
        <Button size='md' className='flex  items-center justify-center gap-1'>
          {icon && <i className={`bx bx-sm md:bx-xs ${icon}`} />}
          <span className='hidden md:inline'>{children}</span>
        </Button>
      </Link>
    </div>
  )
}

const Item: FC<ItemProps> = ({ href, children, icon, currentPath = '', Link = NativeLink }) => {
  const active = currentPath === href
  if (!href)
    return (
      <li aria-current='page'>
        <div className='flex items-center'>
          <i className={`bx ${icon ? icon : 'bx-chevron-right'} bx-sm text-gray-400 dark:text-gray-200`} />
          <span className='text-sm font-medium text-gray-500 dark:text-gray-200'>{children}</span>
        </div>
      </li>
    )

  return (
    <li className='group inline-flex items-center'>
      <Link
        href={href}
        className={`group-hover:text-primary-500 inline-flex items-center text-sm font-medium text-gray-700 transition-colors duration-200 dark:text-gray-300 ${
          active ? 'text-primary-500' : ''
        }`}
      >
        <i
          className={`bx ${
            icon ? icon + ' bx-xs mr-2' : 'bx-chevron-right bx-sm'
          } group-hover:text-primary-500 text-gray-400 transition-colors duration-200 dark:text-gray-300 ${
            active ? 'text-primary-500' : ''
          }`}
        />
        {children}
      </Link>
    </li>
  )
}

const Breadcrumb: BreadcrumbType = ({ className, actions, children }) => {
  return (
    <nav
      className={`bg-second animate-fade-in-from-top flex justify-between rounded-md border text-gray-700 duration-200 dark:text-gray-300 ${
        className ? className : ''
      }`}
    >
      <ol className='inline-flex flex-wrap items-center gap-x-1 gap-y-2 px-5 py-4'>{children}</ol>
      {actions}
    </nav>
  )
}

Breadcrumb.Action = Action
Breadcrumb.Item = Item
Breadcrumb.Link = NativeLink

export default Breadcrumb
