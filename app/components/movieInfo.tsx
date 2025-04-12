'use client'

import React, { useEffect, useState } from 'react'
import { MovieInfoType } from '@/app/type'
import { useAtom } from 'jotai'
import { fetchMovieInfoById, isLoading } from '@/app/store'
import MoviePoster from '@/app/components/poster'

export default function MovieInfo({
  movieId,
}: {
  movieId: number
}): React.ReactElement {
  const [, fetchMovieById] = useAtom(fetchMovieInfoById)
  const [movieInfo, setMovieInfo] = useState<MovieInfoType>()
  const [loading] = useAtom(isLoading)

  useEffect(() => {
    fetchMovieById(movieId).then((res) => {
      setMovieInfo(res)
    })
  }, [])

  return (
    <div className="h-2/3 w-4/6 top-1/2 bg-white rounded-md items-center border-2 shadow-lg overflow-y-scroll bg-gradient-to-t from-20% from-black">
      <div className="h-full w-full overflow-hidden rounded-md">
        <MoviePoster imagePath={movieInfo?.backdrop_path ?? ''} />
      </div>
      <div className="text-5xl">{movieInfo?.title}</div>
    </div>
  )
}
