import React, { useContext, useState } from 'react'
import debounce from '../utils/debounce'

type OverlayItemProps = {
  onClick?: () => void
}

type PropsWithActive<P = any> = P & {
  active?: boolean
}

type DropdownContext = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

type DropdownType = React.FC<React.PropsWithChildren> & {
  Button: React.FC<React.PropsWithChildren<PropsWithActive>>
  Overlay: React.FC<React.PropsWithChildren>
  OverlayItem: React.FC<React.PropsWithChildren<PropsWithActive<OverlayItemProps>>>
}

const Context = React.createContext<DropdownContext>({
  active: false,
  setActive: () => {},
})

const Button: React.FC<React.PropsWithChildren<PropsWithActive>> = ({ active, children }) => {
  const { active: activeContext, setActive } = useContext(Context)
  const debouncedBlur = debounce((activeContext) => {
    if (activeContext) setActive(false)
  }, 200)
  return (
    <button
      type='button'
      className={`dark:bg-third dark:hover:bg-second group peer inline-flex w-full items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:outline-none
        ${active ? 'text-primary' : 'text-gray-700 dark:text-gray-300'}
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
  const { active } = useContext(Context)
  return (
    <div
      className={`
    dark:bg-third absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity
    ${active ? 'visible opacity-100' : 'invisible opacity-0'}
    `}
    >
      <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
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
  return (
    <a
      href='#'
      className={`flex items-center justify-between rounded-md px-4 py-2 text-sm transition-colors ${
        active
          ? 'text-primary bg-primary-200 dark:bg-primary-700 cursor-auto bg-opacity-5 dark:bg-opacity-10'
          : 'hover:text-primary dark:bg-third dark:hover:bg-second text-gray-700 hover:bg-gray-100 dark:text-gray-300'
      }`}
      role='menuitem'
      onClick={onClick}
    >
      {children}
      {active && <i className='bx bx-xs bx-check ml-2'></i>}
    </a>
  )
}

const Dropdown: DropdownType = ({ children }) => {
  const [active, setActive] = useState(false)
  return (
    <Context.Provider value={{ active, setActive }}>
      <div className='relative hidden lg:block'>{children}</div>
    </Context.Provider>
  )
}

Dropdown.Button = Button
Dropdown.Overlay = Overlay
Dropdown.OverlayItem = OverlayItem

export default Dropdown
