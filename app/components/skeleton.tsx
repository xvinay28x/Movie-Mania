import React from 'react'

export default function Skeleton(): React.ReactElement {
  return (
    <div className="flex flex-col w-28 md:w-44 lg:w-52 aspect-[2/3] animate-pulse rounded-md bg-stone-900 p-2 md:p-4 gap-4">
      <div className="bg-stone-800 rounded-full p-2 md:p-4"></div>
      <div className="bg-stone-800 rounded-full p-1 md:p-2 w-1/2 mt-0 md:mt-2"></div>
      <div className="bg-stone-800 rounded-full p-1 md:p-2 mt-0 md:mt-2"></div>
      <div className="bg-stone-800 rounded-full p-1 md:p-2"></div>
      <div className="bg-stone-800 rounded-full p-1 md:p-2"></div>
      <div className="bg-stone-800 rounded-full p-4 w-2/3 lg:mt-6 hidden lg:block"></div>
    </div>
  )
}
