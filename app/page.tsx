'use client'

import { useEffect, useState } from "react";
import NavBar from "./navBar";
import { fetchMovies } from "./store";
import { MovieResult } from './type'
import MovieCard from "./card";


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
      <div className="flex fixed bg-red-600 justify-between overflow-x-scroll">
      {moviesInfo?.results.map((movie) => (
        <MovieCard movie_img={movie.poster_path}/>
      ))}
      </div>
    </div>
    </>
  );
}
