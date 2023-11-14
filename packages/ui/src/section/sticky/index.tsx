import React from 'react'
import useHeaderFixed from '../../hooks/header'

type Props = {
  customWidth?: string
  customMinHeight?: string
  innerClassName?: string
}

const StickySection: React.FC<React.PropsWithChildren<Props>> = ({
  customMinHeight,
  customWidth,
  innerClassName,
  children,
}) => {
  const headerFixed = useHeaderFixed()
  return (
    <section
      className={`${customWidth ? customWidth : 'w-[300px] min-w-[300px] max-w-[300px]'} ${
        customMinHeight ? customMinHeight : 'min-h-[700px]'
      }`}
    >
      <div
        className={`transition-top sticky overflow-y-auto overflow-x-hidden duration-200 ${
          headerFixed ? 'h-sticky-bar top-[80px]' : 'top-0 h-screen'
        } ${innerClassName ? innerClassName : ''}`}
      >
        {children}
      </div>
    </section>
  )
}

export default StickySection
