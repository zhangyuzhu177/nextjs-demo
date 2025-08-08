"use client"

import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const menu = [
  {
    name: 'Article',
    to:'/article'
  },
  {
    name: 'Gallery',
    to:'/gallery'
  },
  {
    name: 'About',
    to:'/about'
  },
  {
    name: '并行路由',
    to:'/parallel'
  }
]

export default function Header() {
  const pathname = usePathname()

  // const accessLink = menu.find(v => v.to === pathname) || pathname === '/'
  
    return (
      <div className="fixed top-0 max-w-[1280px] h-16 w-full flex justify-between items-center">
          <Link className="px-4 py-2 cursor-pointer text-xl font-bold" href="/">Home</Link>
          <div className="flex items-center gap-4">
            { menu.map(v => {
              return (
                <Link
                  key={v.name} href={v.to}
                  className={`
                    ${pathname === v.to ? 'text-purple-600' : ''} 
                    px-4 py-2 cursor-pointer text-xl
                  `}
                >
                  {v.name}
                </Link>
              )
            }) }
          </div>
      </div>
    )
}
