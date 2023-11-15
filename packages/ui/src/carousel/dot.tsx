import React from 'react'
import { PropsWithClassName, Size } from '../types'
export type DotSize = Size

type Props = {
  active: boolean
  onClick: () => void
  size?: DotSize
  style?: React.CSSProperties
}

type DotComponent = React.FC<PropsWithClassName<Props>> & {
  Provider: React.FC<React.PropsWithChildren>
}

const sizes: Record<DotSize, string> = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
  xl: 'w-5 h-5',
  '2xl': 'w-6 h-6',
  '3xl': 'w-8 h-8',
  '4xl': 'w-10 h-10',
}

const Dot: DotComponent = ({ active, onClick, className, style, size = 'xs' }) => {
  return (
    <span
      className={`w-dot-base h-dot-base animate-fade-in cursor-pointer rounded-full transition-all duration-200 ${
        active ? 'bg-gray-900' : 'bg-gray-300'
      } ${sizes[size]} ${className ? className : ''}`}
      onClick={onClick}
      style={style}
    />
  )
}

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className='absolute bottom-0 left-0 flex w-full items-center justify-center '>{children}</div>
}

Dot.Provider = Provider

export default Dot
