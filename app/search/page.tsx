'use client'

import React, { useEffect, useState } from 'react'
import {
  isLoadingAtom,
  queryAtom,
  searchedMovieAtom,
  searchMovieAtom,
} from '../store'
import { useAtomValue, useSetAtom } from 'jotai'
import Card from '../components/card'
import Skeleton from '../components/skeleton'

export default function SearchMovie(): React.ReactElement {
  const searchMovie = useSetAtom(searchMovieAtom)

  const result = useAtomValue(searchedMovieAtom)

  const query = useAtomValue(queryAtom)

  const isLoading = useAtomValue(isLoadingAtom)

  const skeletonArray = Array.from({ length: 24 })

  useEffect(() => {
    void searchMovie()
  }, [query])

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 grid-rows-3 p-2 md:p-4 lg:p-8 gap-4 lg:gap-6">
      {isLoading
        ? skeletonArray.map((_, index) => <Skeleton key={index} />)
        : result?.results.map((movie) => (
            <Card movieInfo={movie} key={movie.id} />
          ))}
    </div>
  )
}
