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
      
    })
  },[])

  return (
    <>
    <div className="h-screen bg-stone-950 ">
      <NavBar/>
      <div className="grid grid-flow-col scrollbar-hide gap-4 items-center w-full overflow-x-scroll p-8">
      {moviesInfo?.results.map((movie) => (
        <MovieCard movie_img={movie.poster_path}/>
      ))}
      </div>
    </div>
    </>
  );
}
