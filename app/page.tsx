'use client'

import { useEffect, useState } from "react";
import NavBar from "./navBar";
import { fetchMovies } from "./store";
import { MovieResult } from './type'


export default function Home() {

  const [moviesInfo, setMoviesInfo] = useState<MovieResult>()

  useEffect(() => {
    fetchMovies()
    .then((res) => {
      setMoviesInfo(res)
      console.log()
    })
  },[])

  return (
    <>
    <div>
      <NavBar/>
      {moviesInfo?.results.map((movie) => (
        <img src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}/>

      ))}
    </div>
    </>
  );
}
