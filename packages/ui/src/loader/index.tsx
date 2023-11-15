import React from 'react'
import { Spinner } from 'sspin'

type Props = {
  noMargin?: boolean
}

const ContentLoader: React.FC<Props> = ({ noMargin = false }) => {
  return (
    <div className={`flex h-full w-full items-center justify-center ease-out ${!noMargin ? 'my-60' : ''}`}>
      <Spinner />
    </div>
  )
}

export default ContentLoader
