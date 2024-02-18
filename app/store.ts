import {atom} from "jotai";
import {MovieResult} from "./type";

const api_key = process.env.API_KEY
const movie_id = 0

const requests = {
    fetchUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
    fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
    fetchMostPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
    fetchMovieById: `https://api.themoviedb.org/3/find/${movie_id}?api_key=${api_key}`
}

export const themeAtom = atom<string>("dark")

export const isLoading = atom<boolean>(false)

export const fetchMoviesAtom = atom(null, async (get, set,): Promise<MovieResult> => {
    set(isLoading, true)
    const response = await fetch(requests.fetchMostPopularMovies)
    set(isLoading, false)
    return response.json()
})