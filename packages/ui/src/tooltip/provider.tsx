import React, { createContext, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { IconPositionGetters, PositionGetterResult, PositionGetters, TooltipPosition } from './positions'

const TooltipIcons: Record<TooltipPosition, string> = {
  top: 'caret-down',
  bottom: 'caret-up',
  left: 'caret-right',
  right: 'caret-left',
  auto: 'caret-down',
  'top-right': 'caret-down',
  'top-left': 'caret-down',
  'bottom-right': 'caret-up',
  'bottom-left': 'caret-up',
}

const getAutoTooltipIcon = ({ x, y, width, height }: PositionProps) => {
  const { innerWidth, innerHeight } = window
  const positions: TooltipPosition[] = ['top', 'bottom', 'left', 'right']
  const results: PositionGetterResult[] = positions.map((pos) => PositionGetters[pos]({ x, y, width, height }))

  const best = results.reduce((prev, curr) => {
    const prevDistance = Math.sqrt(Math.pow(prev.top - innerHeight / 2, 2) + Math.pow(prev.left - innerWidth / 2, 2))
    const currDistance = Math.sqrt(Math.pow(curr.top - innerHeight / 2, 2) + Math.pow(curr.left - innerWidth / 2, 2))

    return prevDistance < currDistance ? prev : curr
  })

  return TooltipIcons[positions[results.indexOf(best)]]
}

export type PositionProps = {
  x: number
  y: number
  width: number
  height: number
}

type ShowProps = PositionProps & {
  key: string
}

export type ContextType = {
  add: (key: string, value: React.ReactNode, position?: TooltipPosition) => void
  remove: (key: string) => void
  show: (props: ShowProps) => void
  hide: (key: string) => void
}

type TooltipEl = {
  key: string
  value: React.ReactNode
  position: TooltipPosition
  show: boolean
  x: number
  y: number
  width: number
  height: number
}

const TooltipContext = createContext<ContextType>({
  add: () => {},
  remove: () => {},
  show: () => {},
  hide: () => {},
})

const TooltipProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [tooltips, setTooltips] = useState<TooltipEl[]>([])

  const add = (key: string, value: React.ReactNode, pos: TooltipPosition = 'auto') => {
    setTooltips((prev) => [
      ...prev,
      {
        key,
        value,
        width: 0,
        height: 0,
        show: false,
        x: 0,
        y: 0,
        position: pos,
      },
    ])
  }

  const remove = (key: string) => {
    setTooltips((prev) => prev.filter((el) => el.key !== key))
  }

  const show = ({ key, x, y, width, height }: ShowProps) => {
    setTooltips((prev) =>
      prev.map((el) => {
        if (el.key === key) {
          return { ...el, show: true, x, y, width: width, height: height }
        }
        return el
      }),
    )
  }

  const hide = (key: string) => {
    setTooltips((prev) =>
      prev.map((el) => {
        if (el.key === key) {
          return { ...el, show: false }
        }
        return el
      }),
    )
  }

  return (
    <TooltipContext.Provider
      value={{
        add,
        remove,
        show,
        hide,
      }}
    >
      {children}
      <TransitionGroup className='tooltip-container'>
        {tooltips
          .filter((i) => i.show)
          .map((el) => (
            <CSSTransition key={el.key} timeout={200} classNames='tooltip' unmountOnExit>
              <>
                <div
                  className={`bg-third fixed rounded-md p-2 text-sm font-normal  shadow-lg transition-opacity`}
                  style={{
                    ...PositionGetters[el.position]({
                      x: el.x,
                      y: el.y,
                      width: el.width,
                      height: el.height,
                    }),
                  }}
                >
                  {el.value}
                </div>
                <i
                  className={`bx text-third fixed bx-${
                    el.position === 'auto' ? getAutoTooltipIcon(el) : TooltipIcons[el.position]
                  }`}
                  style={{
                    ...IconPositionGetters[el.position](el),
                  }}
                ></i>
              </>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </TooltipContext.Provider>
  )
}

export { TooltipContext, TooltipProvider }
