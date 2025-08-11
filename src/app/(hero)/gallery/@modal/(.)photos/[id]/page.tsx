'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { use } from 'react'
import {gallery} from '~/data'


export default function PhotosModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const result = gallery.find(v => v.id === id)
  const router = useRouter()

  return (
    <div className='w-full flex justify-center items-center bg-black/[.5] fixed inset-0' onClick={router.back}>
      <Image src={result?.url ||''} alt="logo" width={400} height={400} className='object-cover rounded-lg' onClick={(e) => e.stopPropagation()}/>
    </div>
  )
}
