import { atom } from 'jotai'
import { MovieResult } from './type'


const url = 'https://api.themoviedb.org/3/discover/movie?api_key=01126075146f47286524e995425874ad';

const isLoading = atom<boolean>(false)

export async function fetchMovies():Promise<MovieResult>{
    const response = await fetch(url)
    return await response.json()
}

