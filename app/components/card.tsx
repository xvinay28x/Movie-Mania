import Image from 'next/image'
import { Movie } from '@/app/type'
import React, { useState } from 'react'
import CardInfo from '@/app/components/cardInfo'
import Skeleton from './skeleton'

export default function Card({ movieInfo }: { movieInfo: Movie }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`flex w-28 md:w-44 lg:w-52 group relative aspect-[2/3] transition duration-500 ease-in-out hover:lg:scale-110 rounded-md`}
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
      {!loaded && <Skeleton key={movieInfo.id} />}

      <div className="absolute hidden lg:block w-28 md:w-44 lg:w-52 border-stone-700 delay-75 border-2 justify-between invisible opacity-90 group-hover:visible hover:transition ease-in-out rounded-md bg-black text-white text-left text-sm h-full scrollbar-hide">
        <CardInfo movieInfo={movieInfo} />
      </div>
    </div>
  )
}
