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
      className={`peer group inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50 border dark:bg-third dark:hover:bg-second transition-colors rounded-md focus:ring-transparent focus:ring-0 focus-visible:outline-none focus:outline-none
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
    origin-top-right absolute z-10 mt-2 right-0 w-40 rounded-md shadow-lg bg-white dark:bg-third p-1 ring-1 ring-black ring-opacity-5 transition-opacity
    ${active ? 'opacity-100 visible' : 'opacity-0 invisible'}
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
      className={`px-4 py-2 text-sm rounded-md flex justify-between items-center transition-colors ${
        active
          ? 'text-primary bg-primary-200 dark:bg-primary-700 bg-opacity-5 dark:bg-opacity-10 cursor-auto'
          : 'text-gray-700 hover:text-primary dark:text-gray-300 hover:bg-gray-100 dark:bg-third dark:hover:bg-second'
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
