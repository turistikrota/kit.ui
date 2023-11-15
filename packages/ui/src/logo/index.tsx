import React from 'react'

type Props = {
  width?: number
  height?: number
  className?: string
}

type BadgeProps = {
  className?: string
}

type LogoComponent = React.FC<React.PropsWithChildren<Props>> & {
  Badge: typeof Badge
  SubModule: typeof SubModule
}

const Badge: React.FC<React.PropsWithChildren<BadgeProps>> = ({ children, className }) => {
  return (
    <span className={className ? className : 'absolute -right-8 -top-2'}>
      <span className='bg-secondary inline-flex items-center justify-center rounded-md px-1 py-1 text-xs leading-none text-black'>
        {children}
      </span>
    </span>
  )
}

const SubModule: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className='bg-secondary dark:bg-secondary-600 inline-flex items-center justify-center rounded-md px-1.5 py-1.5 text-sm leading-none text-black dark:text-white'>
      {children}
    </span>
  )
}

const Logo: LogoComponent = ({ children, width = 186, height = 30, className }) => {
  return (
    <div className={`relative ${className ? className : ''}`}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <text
          style={{
            fill: '#f9a31a',
            fontSize: '34px',
            fontFamily: 'Verdana, Verdana',
          }}
          transform='translate(0 26.92)'
        >
          <tspan x='0' y='0'>
            turistik
          </tspan>
        </text>
        <text
          style={{
            fill: '#3397e6',
            fontSize: '34px',
            fontFamily: 'Verdana, Verdana',
          }}
          transform='translate(118.86 27.08)'
        >
          <tspan x='0' y='0'>
            rota
          </tspan>
        </text>
      </svg>
      {children}
    </div>
  )
}

Logo.Badge = Badge
Logo.SubModule = SubModule

export default Logo
