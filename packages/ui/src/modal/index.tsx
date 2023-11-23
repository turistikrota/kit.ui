import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

type ModalType = React.FC<React.PropsWithChildren<ModalProps>> & {
  Head: HeadType
  Body: typeof Body
  Footer: typeof Footer
}

type CloseableProps = {
  onClose: () => void
  title?: string
}

type ModalProps = CloseableProps & {
  transitionClass?: string
  heightClass?: string
  widthClass?: string
  unmount?: boolean
  delay?: number
  open?: boolean
  shadow?: boolean
}

type HeadType = typeof Head & {
  Title: typeof Title
  Subtitle: typeof Subtitle
  CloseButton: typeof CloseButton
}

function Head({ children }: React.PropsWithChildren) {
  return <div className='bg-second flex w-full flex-col rounded-t-md border-b p-4'>{children}</div>
}

function Title({ children }: React.PropsWithChildren) {
  return <div className='text-xl font-bold'>{children}</div>
}

function Subtitle({ children }: React.PropsWithChildren) {
  return <div className='text-gray-500 dark:text-gray-400'>{children}</div>
}

function CloseButton({ onClose, title }: CloseableProps) {
  return (
    <button
      className='absolute right-4 top-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
      onClick={onClose}
      aria-label={title}
      title={title}
      type='button'
    >
      <i className='bx bx-md bx-x'></i>
    </button>
  )
}

function Body({ children }: React.PropsWithChildren) {
  return <div className='bg-second scrollbar w-full grow overflow-hidden overflow-y-auto p-4'>{children}</div>
}

function Footer({ children }: React.PropsWithChildren) {
  return <div className='bg-second flex w-full items-center justify-between rounded-b-md border-t p-4'>{children}</div>
}

const Modal: ModalType = ({
  children,
  onClose,
  delay = 150,
  open = false,
  heightClass = 'min-h-[50vh]',
  widthClass = 'min-w-[50vw]',
  transitionClass = 'modal-scaler',
  unmount = true,
  shadow = true,
}) => {
  const nodeRef = useRef(null)
  return (
    <div
      className={`flex-col items-center justify-center ${
        open ? 'z-9999 fixed inset-0 flex overflow-hidden backdrop-blur-md' : 'hidden'
      }`}
    >
      <div
        className={`bg-white opacity-50 dark:bg-black ${open ? 'fixed inset-0 block opacity-50' : ' hidden opacity-0'}`}
        onClick={onClose}
      ></div>
      <CSSTransition
        in={open}
        timeout={delay}
        classNames={transitionClass}
        unmountOnExit={unmount}
        onExited={onClose}
        nodeRef={nodeRef}
      >
        <div
          className={`relative z-10 flex w-full max-w-md flex-col items-center justify-center rounded-lg ${
            shadow ? 'shadow-lg' : ''
          } ${heightClass ? heightClass : ''} ${widthClass ? widthClass : ''}`}
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

Head.Title = Title
Head.Subtitle = Subtitle
Head.CloseButton = CloseButton

Modal.Head = Head
Modal.Body = Body
Modal.Footer = Footer

export default Modal
