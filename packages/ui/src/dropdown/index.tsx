import React, { useContext, useState } from 'react'
import debounce from '../utils/debounce'

type OverlayItemProps = {
  onClick?: () => void
}

type PropsWithActive<P = any> = P & {
  active?: boolean
}

type DropdownVariant = 'primary' | 'secondary'

type DropdownContext = {
  active: boolean
  variant: DropdownVariant
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

type DropdownType = React.FC<
  React.PropsWithChildren<{
    variant?: DropdownVariant
  }>
> & {
  Button: React.FC<React.PropsWithChildren<PropsWithActive>>
  Overlay: React.FC<React.PropsWithChildren>
  OverlayItem: React.FC<React.PropsWithChildren<PropsWithActive<OverlayItemProps>>>
}

type DropdownVariantMap = {
  button: string
  overlay: string
  inactiveItem: string
}

const variantMap: Record<DropdownVariant, DropdownVariantMap> = {
  primary: {
    button: 'bg-default',
    inactiveItem: 'hover:bg-second',
    overlay: 'bg-default',
  },
  secondary: {
    button: 'bg-second',
    inactiveItem: 'hover:bg-default',
    overlay: 'bg-second',
  },
}

const Context = React.createContext<DropdownContext>({
  active: false,
  variant: 'primary',
  setActive: () => {},
})

const Button: React.FC<React.PropsWithChildren<PropsWithActive>> = ({ active, children }) => {
  const { active: activeContext, setActive, variant } = useContext(Context)
  const debouncedBlur = debounce((activeContext) => {
    if (activeContext) setActive(false)
  }, 200)
  return (
    <button
      type='button'
      className={`group peer inline-flex w-full items-center justify-center rounded-md border p-2 text-sm font-medium transition-colors focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:outline-none
        ${active ? 'text-primary' : 'text-gray-700 dark:text-gray-300'}
        ${variantMap[variant].button}
      `}
      onClick={() => setActive(!activeContext)}
      onBlur={() => debouncedBlur(activeContext)}
    >
      {children}
      <i
        className={`
      bx bxs-chevron-down ml-2 transition-transform
      ${active ? 'text-primary' : 'text-gray-500 dark:text-gray-200'}
      ${activeContext ? 'rotate-180' : ''}
      `}
      ></i>
    </button>
  )
}

const Overlay: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { active, variant } = useContext(Context)
  return (
    <div
      className={`
    absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md border p-2 ring-0 transition-opacity
    ${active ? 'visible opacity-100' : 'invisible opacity-0'}
    ${variantMap[variant].overlay}
    `}
    >
      <div className='space-y-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
        {children}
      </div>
    </div>
  )
}

const OverlayItem: React.FC<React.PropsWithChildren<PropsWithActive<OverlayItemProps>>> = ({
  active,
  children,
  onClick,
}) => {
  const { variant } = useContext(Context)
  return (
    <a
      href='#'
      className={`flex items-center justify-between rounded-md p-2 text-sm transition-colors ${
        active
          ? 'text-primary bg-primary-200 dark:bg-primary-700 cursor-auto bg-opacity-10 dark:bg-opacity-10'
          : `${variantMap[variant].inactiveItem} text-gray-700 dark:text-gray-300`
      }`}
      role='menuitem'
      onClick={onClick}
    >
      {children}
      {active && <i className='bx bx-xs bx-check ml-2'></i>}
    </a>
  )
}

const Dropdown: DropdownType = ({ children, variant = 'primary' }) => {
  const [active, setActive] = useState(false)
  return (
    <Context.Provider value={{ active, setActive, variant }}>
      <div className='relative hidden lg:block'>{children}</div>
    </Context.Provider>
  )
}

Dropdown.Button = Button
Dropdown.Overlay = Overlay
Dropdown.OverlayItem = OverlayItem

export default Dropdown
