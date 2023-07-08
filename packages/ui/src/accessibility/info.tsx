import React from 'react'
import { useIsDesktop } from '../hooks/dom'
import Tooltip from '../tooltip'

const DesktopInfoBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isDesktop = useIsDesktop()
  if (!isDesktop) return null
  return (
    <Tooltip content={children} position='top-right'>
      <i className='bx bx-info-circle text-gray-500 text-xl ml-1.5'></i>
    </Tooltip>
  )
}

const MobileInfoBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isDesktop = useIsDesktop()
  if (isDesktop) return null
  return <p className='text-sm text-gray-500 mb-4'>{children}</p>
}

export { DesktopInfoBox, MobileInfoBox }
