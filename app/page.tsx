'use client'

import TypeCards from '@/app/component/typesOfMovieCards'
import React, { ReactElement } from 'react'
import { MovieType } from '@/app/store'
import NavBar from '@/app/component/navBar'

export default function Home(): ReactElement {
  return (
    <div className="bg-black px-6">
      <NavBar />
      <TypeCards title={'Only On Netflix'} movieType={MovieType.Netflix} />

      <TypeCards title={'Trending'} movieType={MovieType.TrendingMovies} />

      <TypeCards
        title={'Most Popular Movies'}
        movieType={MovieType.MostPopularMovies}
      />
      <TypeCards
        title={'Upcoming Movies'}
        movieType={MovieType.UpcomingMovies}
      />
      <TypeCards
        title={'Top Rated Movies'}
        movieType={MovieType.TopRatedMovies}
      />
      <TypeCards
        title={'Now Playing Movies'}
        movieType={MovieType.NowPlaying}
      />
      <TypeCards title={'Horror Movies'} movieType={MovieType.HorrorMovies} />
      <TypeCards title={'Action Movies'} movieType={MovieType.ActionMovies} />
      <TypeCards
        title={'Romantic Movies'}
        movieType={MovieType.RomanticMovies}
      />
    </div>
  )
}
