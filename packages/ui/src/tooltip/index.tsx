import React, { useContext, useEffect, useState } from 'react'

import { TooltipPosition } from './positions'
import { TooltipContext, TooltipProvider } from './provider'

type Props = {
  content: React.ReactNode
  className?: string
  innerClassName?: string
  position?: TooltipPosition
}

const randomUUID = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

const Tooltip: React.FC<React.PropsWithChildren<Props>> = ({
  content,
  position = 'auto',
  className,
  innerClassName,
  children,
}) => {
  const [key] = useState(randomUUID())
  const ctx = useContext(TooltipContext)

  useEffect(() => {
    ctx.add(key, content, position)

    return () => {
      ctx.remove(key)
    }
  }, [])

  const show = (e: React.MouseEvent) => {
    const elPositions = e.currentTarget.getBoundingClientRect()
    ctx.show({
      key,
      height: elPositions.height,
      width: elPositions.width,
      x: elPositions.x,
      y: elPositions.y,
    })
  }

  const hide = () => {
    ctx.hide(key)
  }

  return (
    <div className={`group relative ${className ? className : ''}`}>
      <div
        className={`inline-flex items-center ${innerClassName ? innerClassName : ''}`}
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {children}
      </div>
    </div>
  )
}
export default Tooltip
export { TooltipProvider }
