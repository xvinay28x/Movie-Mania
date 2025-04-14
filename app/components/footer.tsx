'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/navigation'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Footer(): React.ReactElement {
  const router = useRouter()
  return (
    <div className="flex flex-col z-50 bottom-0 gap-4 items-center p-4 bg-black text-white justify-center border-t border-stone-900 mt-10 py-10">
      <div className="flex gap-4">
        <FontAwesomeIcon
          icon={faInstagram}
          size="2xl"
          className="cursor-pointer"
          onClick={() => {
            router.push('https://www.instagram.com/xvinay28x/')
          }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          size="2xl"
          className="cursor-pointer"
          onClick={() => {
            router.push('https://www.github.com/xvinay28x/')
          }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2xl"
          className="cursor-pointer"
          onClick={() => {
            router.push('https://www.linkedin.com/in/xvinay28x/')
          }}
        />
        <FontAwesomeIcon
          icon={faGlobe}
          size="2xl"
          className="cursor-pointer"
          onClick={() => {
            router.push('https://portfolio-iota-azure-56.vercel.app/')
          }}
        />
      </div>
      <div className="text-center">
        © 2025 Movie Mania by Vinay Garg. All rights reserved.
      </div>
    </div>
  )
}
