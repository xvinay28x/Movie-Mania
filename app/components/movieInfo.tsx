'use client'

import React, { useEffect } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  movieCastAtom,
  fetchMovieByIdAtom,
  movieImagesAtom,
  isLoadingAtom,
  movieAtom,
  movieVideosAtom,
} from '@/app/store'
import Image from 'next/image'
import ImageCarousel from './imageCarousel'
import MoviePoster from './poster'

export default function MovieInfo({
  movieId,
}: {
  movieId: number
}): React.ReactElement {
  const fetchMovieById = useSetAtom(fetchMovieByIdAtom)

  const movie = useAtomValue(movieAtom)

  const movieCasts = useAtomValue(movieCastAtom)

  const movieImages = useAtomValue(movieImagesAtom)

  const movieVideos = useAtomValue(movieVideosAtom)

  const loading = useAtomValue(isLoadingAtom)

  useEffect(() => {
    void fetchMovieById(movieId)
  }, [movieId])

  useEffect(() => {
    console.log('credits : ', movieCasts)
  }, [movieCasts])

  useEffect(() => {
    console.log('images : ', movieImages)
  }, [movieImages])

  useEffect(() => {
    console.log('videos : ', movieVideos)
  }, [movieVideos])

  return (
    <div className="flex flex-col text-white items-center">
      <div className="carousel w-full h-full">
        {movieImages != null && movieImages.backdrops.length > 0 ? (
          <ImageCarousel images={movieImages.backdrops} />
        ) : (
          <MoviePoster imagePath={movie?.backdrop_path ?? ''} />
        )}
      </div>

      <div className="flex gap-4">
        {movieCasts != null &&
          movieCasts.cast.length > 0 &&
          movieCasts?.cast
            .slice(0, 10)
            .map((it) => (
              <Image
                className="rounded-lg"
                src={'https://image.tmdb.org/t/p/original/' + it.profile_path}
                alt={it.credit_id}
                key={it.id}
                height={120}
                width={120}
              />
            ))}
      </div>
    </div>
  )
}
