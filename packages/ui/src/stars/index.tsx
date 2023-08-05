import React from 'react'

type Props = {
  star: number
  maxStars?: number
  iconSize?: string
}

export default function Stars({ star, iconSize = '', maxStars = 5 }: Props) {
  const halfStars = star < maxStars && star % 1 > 0 ? 1 : 0
  const fixedStar = star > maxStars ? maxStars : star
  const emptyStars = maxStars - Math.trunc(fixedStar) - halfStars
  return (
    <div className='flex'>
      {[...Array(Math.trunc(fixedStar))].map((_, index) => (
        <i key={index} className={`bx bxs-star text-secondary ${iconSize ? iconSize : ''}`}></i>
      ))}
      {halfStars > 0 && <i className={`bx bxs-star-half text-secondary ${iconSize ? iconSize : ''}`}></i>}
      {emptyStars > 0 &&
        [...Array(emptyStars)].map((_, index) => (
          <i key={index} className={`bx bx-star text-secondary ${iconSize ? iconSize : ''}`}></i>
        ))}
    </div>
  )
}
