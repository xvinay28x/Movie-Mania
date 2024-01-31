import { Card } from "./type";

export default function MovieCard({movie_img}:{movie_img:string}){

    return(
        
        <div className="flex w-52 aspect-[2/3] cursor-pointer p-2 transition duration-700 ease-in-out hover:scale-110">
        <img className="w-full h-full rounded-lg" src={'https://image.tmdb.org/t/p/original/' + movie_img}/>
        </div>
    
    )
}