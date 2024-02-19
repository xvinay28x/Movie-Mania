import Image from 'next/image'
import {Movie} from '@/app/type'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import Skeleton from "@/app/component/skeleton";
import Rating from "@/app/component/rating";

export default function MovieCard({
                                      movieInfo
                                  }: {
    movieInfo: Movie
}) {
    const [isHover, setIsHover] = useState<boolean>(false)
    const router = useRouter()

    const rating = Math.round(movieInfo.vote_average/2)

    const [loaded, setLoaded] = useState(false)

    return (
        <div
            className={`flex w-52 aspect-[2/3] transition duration-500 ease-in-out hover:scale-110 rounded-md `}
            onMouseOver={() => {
                setIsHover(true)
            }}
            onMouseLeave={() => {
                setIsHover(false)
            }}
        >
            {isHover ?
                <div
                    className="rounded-md bg-black text-white text-left text-sm p-4 h-full w-full overflow-x-scroll scrollbar-hide"
                >
                    <div className="text-lg">{movieInfo.title}</div>
                    <div className="flex justify-start"><Rating rating={rating}/></div>
                    <div className="font-serif text-stone-500">{movieInfo.release_date}</div>
                    <div className="text-stone-400 overflow-y-scroll scrollbar-hide h-1/2">{movieInfo.overview}</div>
                    <div className="btn mt-2 btn-outline btn-info btn-sm"
                         onClick={() => {
                             router.push(`./movie-info/${movieInfo.id}`)
                         }}>More info
                    </div>
                </div> :
                <>
                    <Image
                        src={'https://image.tmdb.org/t/p/original/' + movieInfo.poster_path}
                        alt={movieInfo.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className={`w-full h-full cursor-pointer rounded-md ${(!loaded) ? 'opacity-0' : 'opacity-100'}`}
                        onLoadingComplete={() => setLoaded(true)}

                    />
                    {!loaded && <Skeleton/>}</>
            }
        </div>
    );
}
