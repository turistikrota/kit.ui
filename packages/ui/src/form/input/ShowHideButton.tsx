import React from 'react'

type ShowHideButtonProps = {
  show: boolean
  showText?: string
  hideText?: string
  onClick: () => void
}

export default function ShowHideButton({ show, showText, hideText, onClick }: ShowHideButtonProps) {
  return (
    <button
      type='button'
      className='text-blue-gray-400 absolute right-3 top-1/2 -translate-y-1/2 transform'
      onClick={onClick}
      aria-label={show ? showText : hideText}
      title={show ? showText : hideText}
    >
      <i className={show ? 'bx bx-show' : 'bx bx-hide'}></i>
    </button>
  )
}
