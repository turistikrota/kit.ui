import React from 'react'

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = React.useRef<() => void>()

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    if (delay === null) return
    const tick = () => {
      savedCallback.current?.()
    }
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])

  return savedCallback
}
