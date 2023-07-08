import React, { useEffect, useState } from 'react'
import Dot from './dot'

type Props = {
  count: number
  indexes: number[]
  onClick: (index: number) => void
}

const DOT_DIAMETER = 8

const scaleValueForIndex = (index: number) => Math.min(Math.max(1 + (2 / 15) * index - (1 / 15) * index * index, 0), 1)

const DotRenderer: React.FC<Props> = ({ count, indexes }) => {
  const [visibleRange, setVisibleRange] = useState<number[]>([])

  useEffect(() => {
    const [fromIndex, toIndex] = indexes
    const rangeStart = Math.max(0, fromIndex - 2)
    const rangeEnd = Math.min(toIndex + 3, count)
    const range = Array.from({ length: rangeEnd - rangeStart }, (_, i) => i + rangeStart)
    setVisibleRange(range)
  }, [indexes, count])

  const visibleWidth =
    visibleRange.reduce(
      (previous, index) => previous + DOT_DIAMETER * scaleValueForIndex(index - indexes[0]) + DOT_DIAMETER,
      0,
    ) +
    (visibleRange.length - 1) * DOT_DIAMETER

  return (
    <Dot.Provider>
      {Array.from({ length: count }, (_, index) => {
        const scale = scaleValueForIndex(index - indexes[0])

        const translateX =
          Array.from(
            { length: index },
            (_, i) => DOT_DIAMETER * scaleValueForIndex(i - indexes[0]) + DOT_DIAMETER,
          ).reduce((previous, current) => previous + current, 0) -
          Math.max(0, indexes[0] - 2) * DOT_DIAMETER -
          visibleWidth / 3

        return (
          <div
            key={index}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: DOT_DIAMETER / 2,
              height: DOT_DIAMETER,
              left: '50%',
              opacity: indexes[1] === index ? 1 : 0.5,
              position: 'absolute',
              bottom: '0.5rem',
              transform: `translateX(${translateX}px) scale(${scale})`,
              transformOrigin: 'left center',
              transition: 'all 200ms ease-out',
              width: DOT_DIAMETER,
            }}
          />
        )
      })}
    </Dot.Provider>
  )
}

export default DotRenderer
