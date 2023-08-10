import React, { useContext, useState } from 'react'
import Modal from '../../modal'
import PerfectImage from '../perfect'
import ImagePreviewContext from './context'

type Props = {
  open?: boolean
  idx?: number
  list: string[]
  altPrefix: string
}

type ContentProps = {
  open: boolean
  onHide: () => void
  onPrev: () => void
  onNext: () => void
  list: string[]
  idx: number
  altPrefix: string
}

const ImagePreviewContent: React.FC<ContentProps> = ({
  open,
  onHide,
  onPrev,
  onNext,
  list,
  idx: current,
  altPrefix,
}) => {
  return (
    <Modal onClose={() => {}} open={open} shadow={false}>
      <div className='fixed bottom-4 md:top-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>
        <button title='Close' onClick={onHide}>
          <i className='bx bx-lg bx-x'></i>
        </button>
      </div>
      <div className='fixed left-4 top-4 md:top-1/2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>
        <button title='Prev' onClick={onPrev}>
          <i className='bx bx-lg bx-chevron-left'></i>
        </button>
      </div>
      <div className='fixed right-4 top-4 md:top-1/2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>
        <button title='Next' onClick={onNext}>
          <i className='bx bx-lg bx-chevron-right'></i>
        </button>
      </div>
      <div className='h-[calc(100vh-15rem)] md:h-[calc(100vh-10rem)] px-4 md:px-20 w-full flex items-center justify-center'>
        <div className='relative w-full h-full'>
          {list.map((item, idx) => (
            <PerfectImage
              key={idx}
              alt={`${altPrefix}-${idx}`}
              src={item}
              className={`absolute top-0 left-0 max-h-full object-contain max-w-full h-full w-full rounded-md transition-opacity duration-200 ${
                idx === current ? 'opacity-100' : 'opacity-0'
              }`}
              onLeftSwipe={onNext}
              onRightSwipe={onPrev}
              fit='contain'
            />
          ))}
        </div>
      </div>
      <div className='fixed top-4 md:bottom-4 md:top-auto left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'>
        <div className='text-xl'>
          {current + 1} / {list.length}
        </div>
      </div>
    </Modal>
  )
}

const ImagePreviewProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  open: defaultOpen = false,
  idx = 0,
  list,
  altPrefix,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen)
  const [currentIdx, setCurrentIdx] = useState<number>(idx)

  const show = (idx = 0) => {
    setCurrentIdx(idx)
    setOpen(true)
  }

  const hide = () => {
    setCurrentIdx(-1)
    setOpen(false)
  }

  const next = () => {
    if (currentIdx < list.length - 1) {
      setCurrentIdx(currentIdx + 1)
    } else {
      setCurrentIdx(0)
    }
  }

  const prev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1)
    } else {
      setCurrentIdx(list.length - 1)
    }
  }

  return (
    <ImagePreviewContext.Provider
      value={{
        idx: currentIdx,
        list,
        show,
        hide,
        next,
        prev,
      }}
    >
      {children}
      {open && (
        <ImagePreviewContent
          altPrefix={altPrefix}
          open={open}
          onHide={hide}
          onPrev={prev}
          onNext={next}
          list={list}
          idx={currentIdx}
        />
      )}
    </ImagePreviewContext.Provider>
  )
}

export const useImagePreview = () => {
  const preview = useContext(ImagePreviewContext)
  return preview
}

export default ImagePreviewProvider
