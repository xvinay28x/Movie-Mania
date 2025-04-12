import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Rating({
  rating,
}: {
  rating: number
}): React.ReactElement {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} color={rating >= 1 ? 'orange' : 'gray'} />
      <FontAwesomeIcon icon={faStar} color={rating >= 2 ? 'orange' : 'gray'} />
      <FontAwesomeIcon icon={faStar} color={rating >= 3 ? 'orange' : 'gray'} />
      <FontAwesomeIcon icon={faStar} color={rating >= 4 ? 'orange' : 'gray'} />
      <FontAwesomeIcon icon={faStar} color={rating >= 5 ? 'orange' : 'gray'} />
    </div>
  )
}
