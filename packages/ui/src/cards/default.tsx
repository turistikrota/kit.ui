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
    <div className={`border ${!noPadding ? 'p-2' : ''} ${!noRound ? 'rounded-md' : ''} ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export default DefaultCard
