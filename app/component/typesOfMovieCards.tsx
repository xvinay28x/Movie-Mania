'use client'

import {fetchMoviesAtom, isLoading} from "../store";
import {MovieResult} from "../type";
import {useEffect, useState} from "react";
import MovieCard from "@/app/component/card";
import Skeleton from "@/app/component/skeleton";
import {useAtom} from "jotai";

export default function TypeCards({title}: { title: string }) {
    const [moviesInfo, setMoviesInfo] = useState<MovieResult>();
    const [, getMovie] = useAtom(fetchMoviesAtom)
    const [loading] = useAtom(isLoading)

    useEffect(() => {
        getMovie().then((res) => {
            setMoviesInfo(res);
        });
    }, []);

    return (
        <div className="text-2xl mt-4">
            <p className="cursor-pointer">{title}</p>
            <div
                className="grid grid-flow-col scrollbar-hide gap-4 items-center w-full overflow-x-scroll scroll-smooth py-4">

                {loading ?

                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <Skeleton key={item}/>
                    )) :
                    moviesInfo?.results.map((movie) => (
                        <MovieCard movieInfo={movie} key={movie.id}/>
                    ))

                }
            </div>
        </div>
    );
}
