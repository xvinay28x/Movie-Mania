'use client'

import Rating from '@/app/component/rating'
import React from 'react'
import { Movie } from '@/app/type'
import { useRouter } from 'next/navigation'

export default function CardInfo({
  movieInfo,
}: {
  movieInfo: Movie
}): React.ReactElement {
  const router = useRouter()

  const rating = Math.round(movieInfo.vote_average / 2)

  return (
    <>
      <div className="flex flex-col">
        <div className="text-lg">{movieInfo.title}</div>
        <div className="flex justify-start">
          <Rating rating={rating} />
        </div>
        <div className="font-serif text-stone-500">
          {movieInfo.release_date}
        </div>
        <div className="text-stone-400 line-clamp-6">{movieInfo.overview}</div>
      </div>
      <div
        className="btn mt-4 btn-outline btn-info btn-sm"
        onClick={() => {
          router.push(`./movie-info/${movieInfo.id}`)
        }}
      >
        More info
      </div>
    </>
  )
}
