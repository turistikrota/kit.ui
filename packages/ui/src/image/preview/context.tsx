import { createContext } from 'react'

type ContextType = {
  idx: number
  list: string[]
  show: (idx: number) => void
  hide: () => void
  next: () => void
  prev: () => void
}

const ImagePreviewContext = createContext<ContextType>({
  idx: 0,
  list: [],
  show: () => {},
  hide: () => {},
  next: () => {},
  prev: () => {},
})

export type { ContextType }
export default ImagePreviewContext
