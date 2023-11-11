import React from 'react'
import { Spinner } from 'sspin'

type Props = {
  noMargin?: boolean
}

const ContentLoader: React.FC<Props> = ({ noMargin = false }) => {
  return (
    <div className={`ease-out w-full h-full flex justify-center items-center ${!noMargin ? 'my-60' : ''}`}>
      <Spinner />
    </div>
  )
}

export default ContentLoader
