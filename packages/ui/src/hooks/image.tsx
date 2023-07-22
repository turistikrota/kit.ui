import { useState } from 'react'

let defaultSrc = ''

export const setDefaultImageSrc = (src: string) => {
  defaultSrc = src
}

type HookResponse = {
  src: string
  onError: () => void
}

export const useImageSrc = (src: string): HookResponse => {
  const [imageSrc, setImageSrc] = useState(src)

  const onError = () => {
    if (imageSrc === defaultSrc) return
    setImageSrc(defaultSrc)
  }

  return {
    src: imageSrc,
    onError,
  }
}
