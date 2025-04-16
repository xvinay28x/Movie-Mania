'use client'

import { MovieType, fetchMoviesAtom, isLoadingAtom } from '../store'
import { MovieResult } from '../type'
import { useEffect, useState } from 'react'
import Card from '@/app/components/card'
import Skeleton from '@/app/components/skeleton'
import { useAtomValue, useSetAtom } from 'jotai'

export default function TypeCards({
  title,
  movieType,
}: {
  title: string
  movieType: MovieType
}) {
  const [moviesInfo, setMoviesInfo] = useState<MovieResult>()

  const getMovie = useSetAtom(fetchMoviesAtom)

  const isLoading = useAtomValue(isLoadingAtom)

  useEffect(() => {
    getMovie(movieType).then((res) => {
      setMoviesInfo(res)
    })
  }, [])

  return (
    <div className="text-2xl mt-4 px-2">
      <p className="cursor-pointer font-bold lg:text-4xl text-white">{title}</p>
      <div className="h-[180px] md:h-[280px] lg:h-[346px] grid grid-flow-col scrollbar-hide gap-2 md:gap-4 items-center w-full overflow-x-scroll scroll-smooth py-1 md:py-2 lg:py-4 overflow-y-hidden">
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => <Skeleton key={index} />)
          : moviesInfo?.results.map((movie) => (
              <Card movieInfo={movie} key={movie.id} />
            ))}
      </div>
    </div>
  )
}
