import React from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  noPadding?: boolean
  noRound?: boolean
}

const DefaultCard: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
  noPadding = false,
  noRound = false,
}) => {
  return (
    <div
      className={`bg-gray-400/5 dark:bg-white/5 ${!noPadding ? 'p-4' : ''} ${!noRound ? 'rounded-md' : ''} ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default DefaultCard
