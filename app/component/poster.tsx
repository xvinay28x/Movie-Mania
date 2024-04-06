import Image from 'next/image'
import React, { useState } from 'react'
import Skeleton from '@/app/component/skeleton'

export default function MoviePoster({ imagePath }: { imagePath: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="w-full aspect-[16/9]">
      <Image
        src={'https://image.tmdb.org/t/p/original/' + imagePath}
        alt={imagePath}
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-full"
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  )
}
