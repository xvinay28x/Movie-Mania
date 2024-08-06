import Image from 'next/image'
import { Movie } from '@/app/type'
import React, { useState } from 'react'
import Skeleton from '@/app/component/skeleton'
import CardInfo from '@/app/component/cardInfo'

export default function MovieCard({ movieInfo }: { movieInfo: Movie }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`flex lg:w-52 md:w-40 sm:w-32 group relative aspect-[2/3] transition duration-500 ease-in-out hover:scale-110 rounded-md`}
    >
      <Image
        src={'https://image.tmdb.org/t/p/original/' + movieInfo.poster_path}
        alt={movieInfo.title}
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-full cursor-pointer rounded-md ${!loaded ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute skeleton lg:w-52 md:w-40 sm:w-32 aspect-[2/3] rounded-md" />
      )}

      <div className="absolute border-stone-700 delay-75 border-2 justify-between invisible opacity-90 group-hover:visible hover:transition ease-in-out rounded-md bg-black text-white text-left text-sm p-4 h-full w-full overflow-y-scroll scrollbar-hide">
        <CardInfo movieInfo={movieInfo} />
      </div>
    </div>
  )
}
