import {fetchMovies} from "../store";
import {MovieResult} from '../type'
import {useEffect, useState} from "react";
import {PortraitMovieCard, LandscapeMovieCard} from "./card";


export default function TypeCards({orientation, title,}: { orientation: Orientation, title: string }) {

    const [moviesInfo, setMoviesInfo] = useState<MovieResult>()

    useEffect(() => {
        fetchMovies()
            .then((res) => {
                setMoviesInfo(res)

            })
    }, [])


    return (
        <>

            <div className="text-white text-2xl font-mono font-bold mt-4">
                <p className="cursor-pointer">{title}</p>
                <div className="grid grid-flow-col scrollbar-hide gap-4 items-center w-full overflow-x-scroll scroll-smooth py-4">
                    {
                        moviesInfo?.results.map((movie) => {
                            let movieCard
                            switch (orientation) {
                                case Orientation.Portrait:
                                    movieCard = <PortraitMovieCard movie_img={movie.poster_path}/>
                                    break;
                                case Orientation.Landscape:
                                    movieCard = <LandscapeMovieCard movie_img={movie.backdrop_path}/>
                                    break;
                            }
                            return movieCard
                        })
                    }
                </div>
            </div>

        </>)
}

export enum Orientation {
    Portrait,
    Landscape,
}