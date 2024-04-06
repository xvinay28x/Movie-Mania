import React from 'react'
import MovieInfo from '@/app/component/movieInfo'

export default function Movie({
  params: { movieId },
}: {
  params: {
    movieId: number
  }
}): React.ReactElement {
  return (
    <div className="flex absolute w-full bg-transparent top-0 items-center justify-center">
      <MovieInfo movieId={movieId} />
    </div>
  )
}
