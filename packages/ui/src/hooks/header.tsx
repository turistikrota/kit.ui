import { useState } from 'react'
import { useListener } from './dom'

type Options = {
  fixedCheckPoint: number
  checkPoint: number
}

const useHeaderFixed = (
  opts: Options = {
    fixedCheckPoint: 64,
    checkPoint: 120,
  },
) => {
  const [fixed, setFixed] = useState(false)

  useListener('scroll', () => {
    const checkPoint: number = fixed ? opts.fixedCheckPoint : opts.checkPoint
    setFixed(window.scrollY >= checkPoint)
  })

  return fixed
}

export default useHeaderFixed
