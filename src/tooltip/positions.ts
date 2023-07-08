import { PositionProps } from './provider'

export type TooltipPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'auto'
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'

export type PositionGetterResult = {
  top: number
  left: number
  transform: string
}

export const PositionGetters: Record<TooltipPosition, (props: PositionProps) => PositionGetterResult> = {
  top: ({ x, y, width }) => ({
    top: y - 5,
    left: x + width / 2,
    transform: 'translate(-50%, -100%)',
  }),
  bottom: ({ x, y, width, height }) => ({
    top: y + height + 5,
    left: x + width / 2,
    transform: 'translate(-50%, 0)',
  }),
  left: ({ x, y, height }) => ({
    top: y + height / 2,
    left: x - 5,
    transform: 'translate(-100%, -50%)',
  }),
  right: ({ x, y, width, height }) => ({
    top: y + height / 2,
    left: x + width + 5,
    transform: 'translate(0, -50%)',
  }),
  auto: ({ x, y, width, height }) => {
    const { innerWidth, innerHeight } = window
    const positions: TooltipPosition[] = [
      'top',
      'bottom',
      'left',
      'right',
      'top-right',
      'top-left',
      'bottom-right',
      'bottom-left',
    ]
    const results: PositionGetterResult[] = positions.map((pos) => PositionGetters[pos]({ x, y, width, height }))

    const best = results.reduce((prev, curr) => {
      const prevDistance = Math.sqrt(Math.pow(prev.top - innerHeight / 2, 2) + Math.pow(prev.left - innerWidth / 2, 2))
      const currDistance = Math.sqrt(Math.pow(curr.top - innerHeight / 2, 2) + Math.pow(curr.left - innerWidth / 2, 2))

      return prevDistance < currDistance ? prev : curr
    })
    return best
  },
  'top-right': ({ x, y, width }) => ({
    top: y - 5,
    left: x + width + 5,
    transform: 'translate(-25%, -100%)',
  }),
  'top-left': ({ x, y, width }) => ({
    top: y - 5,
    left: x + width + 5,
    transform: 'translate(-100%, -100%)',
  }),
  'bottom-right': ({ x, y, width, height }) => ({
    top: y + height + 5,
    left: x + width + 5,
    transform: 'translate(-25%, 0)',
  }),
  'bottom-left': ({ x, y, width, height }) => ({
    top: y + height + 5,
    left: x + width + 5,
    transform: 'translate(-100%, 0)',
  }),
}

export const IconPositionGetters: Record<TooltipPosition, (props: PositionProps) => PositionGetterResult> = {
  top: ({ x, y, width }) => ({
    top: y + 4,
    left: x + width / 2,
    transform: 'translate(-50%, -100%)',
  }),
  bottom: ({ x, y, width, height }) => ({
    top: y + height - 4,
    left: x + width / 2,
    transform: 'translate(-50%, 0)',
  }),
  left: ({ x, y, height }) => ({
    top: y + height / 2,
    left: x + 4,
    transform: 'translate(-100%, -50%)',
  }),
  right: ({ x, y, width, height }) => ({
    top: y + height / 2,
    left: x + width - 4,
    transform: 'translate(0, -50%)',
  }),
  auto: ({ x, y, width, height }) => {
    const { innerWidth, innerHeight } = window
    const positions: TooltipPosition[] = [
      'top',
      'bottom',
      'left',
      'right',
      'top-right',
      'top-left',
      'bottom-right',
      'bottom-left',
    ]
    const results: PositionGetterResult[] = positions.map((pos) => IconPositionGetters[pos]({ x, y, width, height }))

    const best = results.reduce((prev, curr) => {
      const prevDistance = Math.sqrt(Math.pow(prev.top - innerHeight / 2, 2) + Math.pow(prev.left - innerWidth / 2, 2))
      const currDistance = Math.sqrt(Math.pow(curr.top - innerHeight / 2, 2) + Math.pow(curr.left - innerWidth / 2, 2))

      return prevDistance < currDistance ? prev : curr
    })

    return best
  },
  'top-right': ({ x, y, width }) => ({
    top: y + 4,
    left: x + width / 2 - 4,
    transform: 'translate(0, -100%)',
  }),
  'top-left': ({ x, y, width }) => ({
    top: y + 4,
    left: x + width - 4,
    transform: 'translate(-100%, -100%)',
  }),
  'bottom-right': ({ x, y, width, height }) => ({
    top: y + height - 4,
    left: x + width / 2 - 4,
    transform: 'translate(0, 0)',
  }),
  'bottom-left': ({ x, y, width, height }) => ({
    top: y + height - 4,
    left: x + width - 4,
    transform: 'translate(-100%, 0)',
  }),
}
