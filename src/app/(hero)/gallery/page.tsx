import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {gallery} from '~/data'

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <div className='flex flex-wrap gap-4 max-w-[1080px]'>
      {
        gallery.map(v => {
          return (
            <Link href={`/gallery/photos/${v.id}`} key={v.id} className='flex flex-col gap-1 cursor-pointer'>
              <Image src={v.url} alt="" width={200} height={200} className='rounded-lg object-cover' />
              <div className='text-md text-gray-500'>{v.desc}</div>
              <div className='text-xl font-bold'>{v.title}</div>
            </Link>
          )
        })
      }
    </div>
  )
}
