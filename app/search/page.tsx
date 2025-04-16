'use client'

import React, { useEffect, useMemo, useState } from 'react'
import {
  AllMoviesAtom,
  isLoadingAtom,
  pageAtom,
  queryAtom,
  // searchedMoviesAtom,
  searchMovieAtom,
} from '../store'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import Card from '../components/card'
import Skeleton from '../components/skeleton'

export default function SearchMovie(): React.ReactElement {
  const searchMovie = useSetAtom(searchMovieAtom)

  const [allMovies, setAllMovies] = useAtom(AllMoviesAtom)

  const query = useAtomValue(queryAtom)

  const isLoading = useAtomValue(isLoadingAtom)

  const skeletonArray = Array.from({ length: 24 })

  const [page, setPage] = useAtom(pageAtom)

  useEffect(() => {
    if (query === '') {
      setPage(1)
      setAllMovies([])
    } else {
      void searchMovie()
    }
  }, [query])

  useEffect(() => {
    if (query !== '') {
      void searchMovie()
    }
  }, [page])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setPage((prev) => prev + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 grid-rows-3 p-2 md:p-4 lg:p-8 gap-4 lg:gap-6 min-h-[750px] md:min-h-[950px] overflow-hidden overflow-y-scroll">
      {isLoading ? (
        skeletonArray.map((_, index) => <Skeleton key={index} />)
      ) : allMovies.length > 0 ? (
        allMovies.map((movie) => <Card movieInfo={movie} key={movie.id} />)
      ) : (
        <div className="absolute text-4xl md:text-6xl lg:text-8xl place-self-center text-stone-800">
          Search Movies
        </div>
      )}
    </div>
  )
}
