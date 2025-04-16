'use client'

import { useAtom, useSetAtom } from 'jotai'
import { isSearchIconClickedAtom, queryAtom, themeAtom } from '../store'
import Image from 'next/image'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useMemo, useRef } from 'react'

export default function NavBar() {
  const [theme, setTheme] = useAtom(themeAtom)

  const [isSearchClicked, setIsSearchClicked] = useAtom(isSearchIconClickedAtom)

  const [query, setQuery] = useAtom(queryAtom)

  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const pathName = usePathname()

  useEffect(() => {
    if (pathName === '/') {
      setIsSearchClicked(false)
    }

    if (pathName === '/search') {
      setIsSearchClicked(true)
      inputRef.current?.focus()
    }
  }, [pathName])

  return (
    <div className="flex sticky top-0 z-50 items-center justify-between lg:px-8 px-2 md:py-2 py-1 bg-black/50 backdrop-blur w-full border-stone-900 border-b">
      <div
        className={`flex w-fit items-center gap-2 cursor-pointer`}
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

        <div className="text-xl text-white hidden md:block">Movie Mania</div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="overflow-hidden">
          <input
            ref={inputRef}
            type="text"
            value={query}
            className={`bg-transparent bg-stone-800 px-2 md:p-2 md:rounded-lg rounded border outline-none transition-all duration-300 ease-in-out transform ${
              isSearchClicked
                ? 'opacity-100 -translate-x-0 focus'
                : 'opacity-0 translate-x-20 pointer-events-none'
            }`}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
          <XMarkIcon
            className={`absolute size-5 md:size-6 top-[18px] md:top-5 right-[42px] md:right-11 lg:right-[66px] ${query.length > 0 ? 'block' : 'hidden'} cursor-pointer`}
            onClick={() => {
              setQuery('')
            }}
          />
        </div>
        <MagnifyingGlassIcon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={() => {
            setIsSearchClicked(true)
            router.push('/search')
          }}
        />
      </div>
    </div>
  )
}
