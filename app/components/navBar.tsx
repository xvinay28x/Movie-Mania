'use client'

import { useAtom } from 'jotai'
import { themeAtom } from '../store'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
  const [theme, setTheme] = useAtom(themeAtom)

  return (
    <div className="flex items-center justify-between lg:px-8 px-2 md:py-2 py-1 bg-black/50 backdrop-blur w-full border-stone-900 border-b">
      <div className="flex items-center gap-2">
        <Image
          src="/favicon.ico"
          alt="icon"
          width={48}
          height={48}
          className="h-12 w-12 cursor-pointer"
        />
        <div className="text-xl text-white">Movie Mania</div>
      </div>
      <MagnifyingGlassIcon className="h-6 w-6 text-white" />
    </div>
  )
}
