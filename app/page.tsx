"use client";

import { useEffect, useState } from "react";
import NavBar from "./navBar";
import { fetchMovies } from "./store";
import { MovieResult } from "./type";
import { VerticalMovieCard, HorizontalMovieCard } from "./card";

export default function Home() {
  const [moviesInfo, setMoviesInfo] = useState<MovieResult>();

  useEffect(() => {
    fetchMovies().then((res) => {
      setMoviesInfo(res);
    });
  }, []);

  return (
    <>
      <div className="h-screen w-screen bg-stone-950">
        <NavBar />
        <div className="grid grid-flow-col scrollbar-hide gap-4 items-center w-full overflow-x-scroll py-12">
          {moviesInfo?.results.map((movie) => (
            <HorizontalMovieCard
              key={movie.id}
              movie_img={movie.backdrop_path}
            />
          ))}
        </div>
        <div className="grid grid-flow-col scrollbar-hide gap-4 items-center w-full overflow-x-scroll py-12">
          {moviesInfo?.results.map((movie) => (
            <VerticalMovieCard key={movie.id} movie_img={movie.poster_path} />
          ))}
        </div>
      </div>
    </>
  );
}
