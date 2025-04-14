import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ImageItem } from '../type'

export default function ImageCarousel({
  images,
}: {
  images: ImageItem[]
}): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      <div className="carousel w-full">
        <div className="carousel-item w-full">
          <Image
            src={
              'https://image.tmdb.org/t/p/original/' +
              images[currentIndex].file_path
            }
            className="w-full h-full object-cover aspect-[16/9]"
            alt={`carousel-img-${currentIndex}`}
            width={0}
            height={0}
            sizes={'100vh'}
          />
        </div>
      </div>
    </div>
  )
}
