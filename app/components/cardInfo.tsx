'use client'

import Rating from '@/app/components/rating'
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
      <div className="flex flex-col justify-between h-full w-52 aspect-[2/3] p-4">
        <div>
          <div className="text-lg cursor-default">
            {movieInfo.title ?? movieInfo.original_name}
          </div>
          <div className="flex justify-start">
            <Rating rating={rating} />
          </div>
          <div className="font-serif text-stone-500">
            {movieInfo.release_date}
          </div>
          <div className="lg:text-md cursor-default text-stone-400 line-clamp-6">
            {movieInfo.overview}
          </div>
        </div>
        <div className="w-2/3 ">
          <div
            className="flex btn btn-outline btn-info btn-sm"
            onClick={() => {
              router.push(`/movie/${movieInfo.id}`)
            }}
          >
            More info
          </div>
        </div>
      </div>
    </>
  )
}
