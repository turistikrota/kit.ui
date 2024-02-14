import React from 'react'
import { FullVariant } from '../types'

type Props = {
  width?: number
  height?: number
  className?: string
  subApp?: string
  variant?: FullVariant
  vertical?: boolean
}

const floorNumber = 14.915
const floorHeightNumber = 26.92
const subAppMargin = 9.02

const calculateTextLength = (text: string) => {
  return text.length * floorNumber
}

const Variants: Record<FullVariant, string> = {
  blue: 'fill-blue-500',
  danger: 'fill-red-500',
  green: 'fill-green-500',
  indigo: 'fill-indigo-500',
  orange: 'fill-orange-500',
  primary: 'fill-primary',
  purple: 'fill-purple-500',
  secondary: 'fill-secondary',
  success: 'fill-success',
  teal: 'fill-teal-500',
  warning: 'fill-warning',
  yellow: 'fill-yellow-500',
  default: 'fill-emerald-500',
}

const Logo: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  vertical = false,
  height = 30,
  className,
  variant = 'default',
  subApp,
}) => {
  const textLength = calculateTextLength(`turistikrota${subApp ? `${subApp}` : ''}`)
  const fixedHeight = vertical ? height * 2 + floorNumber / 2 : height
  return (
    <div className={`relative ${className ? className : ''}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${textLength} ${fixedHeight}`}
        width={textLength}
        height={fixedHeight}
        overflow={'initial'}
      >
        <text
          style={{
            fill: '#f9a31a',
            fontSize: '34px',
            fontFamily: 'Verdana, Verdana',
          }}
          transform={`translate(0, ${floorHeightNumber})`}
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
          transform={`translate(${floorNumber * 8}, ${floorHeightNumber})`}
        >
          <tspan x='0' y='0'>
            rota
          </tspan>
        </text>
        {subApp && (
          <text
            style={{
              fontSize: '30px',
              fontFamily: 'Verdana, Verdana',
            }}
            className={Variants[variant]}
            transform={`translate(${vertical ? 0 : textLength - calculateTextLength(subApp) + subAppMargin}, ${
              vertical ? 2 * floorHeightNumber + floorNumber / 3 : floorHeightNumber
            })`}
          >
            <tspan x='0' y='0'>
              {subApp}
            </tspan>
          </text>
        )}
      </svg>
      {children}
    </div>
  )
}

export default Logo
