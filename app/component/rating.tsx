import React from 'react'

export default function Rating({
  rating,
}: {
  rating: number
}): React.ReactElement {
  return (
    <div className="rating rating-sm">
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked={rating === 1}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked={rating === 2}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked={rating === 3}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked={rating === 4}
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked={rating === 5}
      />
    </div>
  )
}
