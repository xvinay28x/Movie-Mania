import React from 'react'
import MovieInfo from '@/app/components/movieInfo'

export default function Movie({
  params: { movieId },
}: {
  params: {
    movieId: number
  }
}): React.ReactElement {
  return (
    <div className="flex w-full bg-transparent items-center justify-center">
      <MovieInfo movieId={movieId} />
    </div>
  )
}
