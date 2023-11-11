import { useState } from 'react'
import { useListener } from './dom'

export type Options = {
  fixedCheckPoint: number
  checkPoint: number
}

const useHeaderFixed = (
  opts: Options = {
    fixedCheckPoint: 64,
    checkPoint: 120,
  },
  defaultFixed = false,
) => {
  const [fixed, setFixed] = useState(defaultFixed)

  useListener('scroll', () => {
    const checkPoint: number = fixed ? opts.fixedCheckPoint : opts.checkPoint
    setFixed(window.scrollY >= checkPoint)
  })

  return fixed
}

export default useHeaderFixed
