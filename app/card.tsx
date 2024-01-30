import { Card } from "./type";

export default function MovieCard({movie_img}:{movie_img:string}){

    return(
        <>
        <div className="flex w-40 h-60 cursor-pointer m-2">
        <img className="rounded-lg" src={'https://image.tmdb.org/t/p/original/' + movie_img}/>
        </div>
        </>
    )
}