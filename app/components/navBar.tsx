'use client'

import { useAtom, useSetAtom } from 'jotai'
import { isSearchIconClickedAtom, queryAtom, themeAtom } from '../store'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const [theme, setTheme] = useAtom(themeAtom)

  const [isSearchClicked, setIsSearchClicked] = useAtom(isSearchIconClickedAtom)

  const setQuery = useSetAtom(queryAtom)

  const router = useRouter()

  return (
    <div className="flex sticky top-0 z-50 items-center justify-between lg:px-8 px-2 md:py-2 py-1 bg-black/50 backdrop-blur w-full border-stone-900 border-b">
      <div
        className={`flex items-center gap-2 ${isSearchClicked ? 'hidden md:block' : 'block'} cursor-pointer`}
        onClick={() => {
          router.push('/')
        }}
      >
        <Image
          src="/favicon.ico"
          alt="icon"
          width={48}
          height={48}
          className="h-12 w-12"
        />
        <div className="text-xl text-white">Movie Mania</div>
      </div>
      <div className="flex gap-2">
        <MagnifyingGlassIcon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={() => {
            setIsSearchClicked(!isSearchClicked)
            router.push('/search')
          }}
        />
        <input
          type="text"
          className={`bg-transparent border ${isSearchClicked ? 'block' : 'hidden'} outline-none`}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
    </div>
  )
}
