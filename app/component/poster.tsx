import Image from "next/image";
import {Movie} from "@/app/type";

export default function MoviePoster({
                                        movieInfo
                                    }: {
    movieInfo: Movie
}) {
    return (<div
        className='flex w-72 aspect-[16/9] cursor-pointer transition duration-300 ease-in-out hover:scale-110 rounded-md'
    >
        <Image
            src={"https://image.tmdb.org/t/p/original/" + movieInfo.backdrop_path}
            alt={movieInfo.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{width: '100%', height: 'auto', borderRadius: '1.5%'}}
        />
    </div>);
}
