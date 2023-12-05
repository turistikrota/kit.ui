import React, { FC, PropsWithChildren, ReactNode } from 'react'
import Card from '../cards/default'

type Props = {
  className?: string
}

type ItemProps = {
  date: string
  avatar: ReactNode
}

type AvatarProps = {
  avatar: string
  avatarAlt: string
}

type ComponentType = FC<PropsWithChildren<Props>> & {
  Item: FC<PropsWithChildren<ItemProps>>
  Avatar: FC<AvatarProps>
  Admin: FC
}

const Timeline: ComponentType = ({ className, children }) => {
  return <ol className={`relative border-s ${className ? className : ''}`}>{children}</ol>
}

const Avatar: FC<AvatarProps> = ({ avatar, avatarAlt }) => {
  return <img className='rounded-full shadow-lg' src={avatar} alt={avatarAlt} />
}

const Admin: FC = () => {
  return <i className='bx bx-user text-xl' />
}

const Item: FC<PropsWithChildren<ItemProps>> = ({ avatar, date, children }) => {
  return (
    <li className='mb-10 ms-8'>
      <span className='bg-second absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-transparent'>
        {avatar}
      </span>
      <Card className='items-center justify-between rounded-md p-4 sm:flex'>
        <time className='mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0 min-w-max'>{date}</time>
        <div className='text-sm font-normal text-gray-500 dark:text-gray-300'>{children}</div>
      </Card>
    </li>
  )
}

Timeline.Item = Item
Timeline.Avatar = Avatar
Timeline.Admin = Admin

export default Timeline
