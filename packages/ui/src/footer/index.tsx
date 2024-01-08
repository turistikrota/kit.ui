import React, { type FC, type PropsWithChildren } from 'react'

type FooterType = FC<PropsWithChildren> & {
  Grid: GridType
  Social: FC<PropsWithChildren>
  Copyright: CopyRightRowType
  Mobile: FC<PropsWithChildren>
}

type GridType = FC<PropsWithChildren> & {
  Col: GridColType
}

type GridColType = FC<PropsWithChildren<ColProps>> & {
  Item: FC<PropsWithChildren>
}

type CopyRightRowType = FC<PropsWithChildren> & {
  Item: FC<PropsWithChildren>
}

type ColProps = {
  title: string
}

const Grid: GridType = ({ children }) => {
  return <div className='hidden grid-cols-6 gap-2 md:grid md:grid-cols-4'>{children}</div>
}
const GridCol: GridColType = ({ children, title }) => {
  return (
    <div className='col-span-6 md:col-span-1'>
      <p className='mb-4'>{title}</p>
      <ul className='space-y-2'>{children}</ul>
    </div>
  )
}

const GridColItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className='text-sm text-gray-700 dark:text-gray-200'>{children}</li>
}

const SocialRow: FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex w-full items-center justify-center gap-x-2 md:justify-end'>{children}</div>
}

const CopyrightRow: CopyRightRowType = ({ children }) => {
  return <div className='flex flex-col items-center gap-4 md:flex-row lg:justify-between lg:gap-0'>{children}</div>
}

const CopyrightRowItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex w-full min-w-max justify-center gap-2 text-sm text-gray-600 dark:text-gray-300 md:first:justify-start md:last:justify-end'>
      {children}
    </div>
  )
}

const Mobile: FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex flex-col items-center gap-x-2 gap-y-4 md:hidden'>{children}</div>
}

const Footer: FooterType = ({ children }) => {
  return <footer className='mx-auto flex max-w-7xl flex-col gap-x-2 gap-y-4 p-2 md:gap-y-2'>{children}</footer>
}

GridCol.Item = GridColItem
Grid.Col = GridCol

CopyrightRow.Item = CopyrightRowItem

Footer.Grid = Grid
Footer.Social = SocialRow
Footer.Copyright = CopyrightRow
Footer.Mobile = Mobile

export default Footer
