import { useEffect, useState } from 'react'

export const useListener = <T extends HTMLElement = HTMLElement>(
  eventName: string,
  handler: (event: Event) => void,
  element?: T,
) => {
  const el = typeof window !== 'undefined' ? element || window : undefined
  useEffect(() => {
    el!.addEventListener(eventName, handler)
    return () => {
      el!.removeEventListener(eventName, handler, false)
    }
  }, [eventName, handler, el])
}

type Size = {
  width: number | undefined
  height: number | undefined
}

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    let cb = () => {}
    if (typeof window !== 'undefined') {
      const handler = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handler)
      handler()
      cb = () => window.removeEventListener('resize', handler)
    }
    return cb
  }, [])
  return windowSize
}

export const useIsMobile = (): boolean => {
  const { width } = useWindowSize()
  return width ? width < 768 : false
}

export const useIsSmallMobile = (): boolean => {
  const { width } = useWindowSize()
  return width ? width < 375 : false
}

export const useIsTablet = (): boolean => {
  const { width } = useWindowSize()
  return width ? width < 1024 : false
}

export const useIsDesktop = (): boolean => {
  const { width } = useWindowSize()
  return width ? width >= 1024 : false
}

export const useWindowWidth = (): boolean => {
  const { width } = useWindowSize()
  return !!width
}

export const useAgentMobile = (): boolean => {
  if (typeof window !== 'undefined') {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
  }
  return false
}

export const useInfiniteScroll = (callback: () => void, loading: boolean, offset = 0) => {
  useListener('scroll', () => {
    if (loading) return
    if (window.innerHeight + window.scrollY + offset >= document.body.scrollHeight) {
      callback()
    }
  })
}
