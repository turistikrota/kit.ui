import React, { type FC, type PropsWithChildren } from 'react'

type FooterType = FC<PropsWithChildren> & {
  Grid: GridType
  Social: FC<PropsWithChildren>
  Copyright: CopyRightRowType
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
  return <div className='grid grid-cols-6 gap-2 lg:grid-cols-5'>{children}</div>
}
const GridCol: GridColType = ({ children, title }) => {
  return (
    <div className='col-span-6 sm:col-span-3 lg:col-span-1'>
      <p className='mb-4'>{title}</p>
      <ul className='space-y-2'>{children}</ul>
    </div>
  )
}

const GridColItem: FC<PropsWithChildren> = ({ children }) => {
  return <li className='text-sm text-gray-700 dark:text-gray-200'>{children}</li>
}

const SocialRow: FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex w-full items-center justify-center gap-x-2 lg:justify-end'>{children}</div>
}

const CopyrightRow: CopyRightRowType = ({ children }) => {
  return <div className='flex flex-col items-center lg:flex-row lg:justify-between'>{children}</div>
}

const CopyrightRowItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex w-full min-w-max justify-center text-sm text-gray-600 dark:text-gray-300 lg:first:justify-start lg:last:justify-end'>
      {children}
    </div>
  )
}

const Footer: FooterType = ({ children }) => {
  return <footer className='mx-auto flex max-w-7xl flex-col gap-2 p-2'>{children}</footer>
}

GridCol.Item = GridColItem
Grid.Col = GridCol

CopyrightRow.Item = CopyrightRowItem

Footer.Grid = Grid
Footer.Social = SocialRow
Footer.Copyright = CopyrightRow

export default Footer
