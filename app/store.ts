import { atom } from 'jotai'
import {
  MovieCredits,
  MovieImages,
  MovieInfoType,
  MovieResult,
  Video,
} from './type'

const api_key = process.env.API_KEY

const requests = {
  fetchNetflixMovies: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTrendingMovies: `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&language=en-US`,
  fetchUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
  fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
  fetchMostPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
  fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanticMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
}

export const themeAtom = atom<string>('dark')

export const isLoadingAtom = atom<boolean>(false)

export const isSearchIconClickedAtom = atom<boolean>(false)

export const fetchMoviesAtom = atom(
  null,
  async (get, set, type: MovieType): Promise<MovieResult> => {
    set(isLoadingAtom, true)
    let response
    switch (type) {
      case MovieType.Netflix: {
        response = await fetch(requests.fetchNetflixMovies)
        break
      }
      case MovieType.TrendingMovies: {
        response = await fetch(requests.fetchTrendingMovies)
        break
      }
      case MovieType.TopRatedMovies: {
        response = await fetch(requests.fetchTopRatedMovies)
        break
      }
      case MovieType.UpcomingMovies: {
        response = await fetch(requests.fetchUpcomingMovies)
        break
      }
      case MovieType.MostPopularMovies: {
        response = await fetch(requests.fetchMostPopularMovies)
        break
      }
      case MovieType.NowPlaying: {
        response = await fetch(requests.fetchNowPlaying)
        break
      }
      case MovieType.ActionMovies: {
        response = await fetch(requests.fetchActionMovies)
        break
      }
      case MovieType.ComedyMovies: {
        response = await fetch(requests.fetchComedyMovies)
        break
      }
      case MovieType.HorrorMovies: {
        response = await fetch(requests.fetchHorrorMovies)
        break
      }
      case MovieType.RomanticMovies: {
        response = await fetch(requests.fetchRomanticMovies)
        break
      }
    }
    set(isLoadingAtom, false)
    return response.json()
  },
)

export enum MovieType {
  Netflix = 'Netflix',
  UpcomingMovies = 'Upcoming',
  TopRatedMovies = 'TopRated',
  MostPopularMovies = 'MostPopular',
  NowPlaying = 'NowPlaying',
  ActionMovies = 'Action',
  ComedyMovies = 'Comedy',
  HorrorMovies = 'Horror',
  RomanticMovies = 'Romance',
  TrendingMovies = 'Trending',
}

export const movieAtom = atom<MovieInfoType | null>(null)

export const fetchMovieByIdAtom = atom(
  null,
  async (get, set, movieId: number) => {
    set(isLoadingAtom, true)
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,
    )
    const jsonResponse = await response.json()
    set(fetchMovieCastsAtom, movieId)
    set(fetchMovieImagesAtom, movieId)
    set(fetchMovieVideosAtom, movieId)
    set(searchMovieAtom)
    set(movieAtom, jsonResponse)
    set(isLoadingAtom, false)
  },
)

export const movieCastAtom = atom<MovieCredits | null>(null)

const fetchMovieCastsAtom = atom(null, async (get, set, movieId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`,
  )
  const jsonResponse = await response.json()
  set(movieCastAtom, jsonResponse)
})

export const movieImagesAtom = atom<MovieImages | null>(null)

const fetchMovieImagesAtom = atom(null, async (get, set, movieId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${api_key}`,
  )
  const jsonResponse = await response.json()
  set(movieImagesAtom, jsonResponse)
})

export const movieVideosAtom = atom<Video | null>(null)

const fetchMovieVideosAtom = atom(null, async (get, set, movieId: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`,
  )
  const jsonResponse = await response.json()
  set(movieImagesAtom, jsonResponse)
})

export const searchedMovieAtom = atom<MovieResult | null>(null)

export const queryAtom = atom<string | null>(null)

export const searchMovieAtom = atom(null, async (get, set) => {
  set(isLoadingAtom, true)
  const query = get(queryAtom)
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`,
  )
  const jsonResponse = await response.json()
  set(searchedMovieAtom, jsonResponse)
  set(isLoadingAtom, false)
})
