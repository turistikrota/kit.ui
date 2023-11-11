import React, { ReactNode } from 'react'

const sizeClasses = {
  xs: 'w-24 h-24',
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'lg:w-72 lg:h-72 w-56 h-56',
  xl: 'lg:w-96 lg:h-96 w-64 h-64',
  '2xl': 'lg:w-128 lg:h-128 w-80 h-80',
  '3xl': 'lg:w-144 lg:h-144 w-96 h-96',
}

const justifyClass = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
}

const alignClass = {
  center: 'items-center',
  start: 'items-start',
}

type GlassItemProps = {
  color: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  position: string
}

const GlassItem: React.FC<GlassItemProps> = ({ color, size, position }) => (
  <span
    className={`block ${color} ${sizeClasses[size]} ${position} rounded-full mix-blend-multiply filter blur-3xl opacity-10`}
  ></span>
)

type GlassEffectProps = {
  justify?: 'start' | 'center' | 'end'
  align?: 'center' | 'start'
  position?: string
  children: ReactNode
}

const GlassEffect: React.FC<GlassEffectProps> & {
  Item: typeof GlassItem
  Fixed: typeof Fixed
} = ({ justify, align, position, children }) => (
  <div
    className={`absolute inset-x-0 w-full min-h-0 flex overflow-hidden -z-1 p-10 ${
      justify ? justifyClass[justify] : ''
    } ${align ? alignClass[align] : ''} ${position ? position : ''}`}
  >
    {children}
  </div>
)

export const Fixed: React.FC = () => {
  return (
    <>
      <span className='fixed blur-[200px] lg:w-[600px] w-[400px] lg:h-[600px] h-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] -z-1 bg-primary-600/20 dark:bg-primary-600/10' />
      <span className='fixed blur-[200px] lg:w-[600px] w-[400px] lg:h-[600px] h-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] -z-1 bg-secondary-600/20 dark:bg-secondary-600/10' />
    </>
  )
}

GlassEffect.Item = GlassItem
GlassEffect.Fixed = Fixed

export default GlassEffect
