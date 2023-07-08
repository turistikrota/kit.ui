import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../assets/animation.css'

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
  return <div className='flex bg-second w-full flex-col p-4 border-b rounded-t-md'>{children}</div>
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
      className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
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
  return <div className='p-4 grow bg-second w-full overflow-hidden overflow-y-auto scrollbar'>{children}</div>
}

function Footer({ children }: React.PropsWithChildren) {
  return <div className='flex p-4 bg-second w-full justify-between items-center border-t rounded-b-md'>{children}</div>
}

const Modal: ModalType = ({
  children,
  onClose,
  delay = 150,
  open = false,
  transitionClass = 'modal-scaler',
  unmount = true,
  shadow = true,
}) => {
  const nodeRef = useRef(null)
  return (
    <div
      className={`items-center justify-center flex-col ${
        open ? 'fixed inset-0 z-50 flex overflow-hidden backdrop-blur-md' : 'hidden'
      }`}
    >
      <div
        className={`bg-white dark:bg-black opacity-50 ${open ? 'fixed inset-0 opacity-50 block' : ' hidden opacity-0'}`}
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
          className={`w-full max-w-md flex flex-col items-center justify-center rounded-lg relative z-10 min-h-[50vh] min-w-[50vw] ${
            shadow ? 'shadow-lg' : ''
          }`}
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
