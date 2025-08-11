import Image from 'next/image'
import React, { use } from 'react'
import {gallery} from '~/data'


export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
  const result = gallery.find(v => v.id === id)

  return (
    <div className='flex flex-col gap-4'>
      <Image src={result?.url ||''} alt="logo" width={400} height={400} className='object-cover rounded-lg' />
      <div className='border-2 border-gray-300 border-solid rounded-lg p-4'>{ result?.desc }</div>
      <div className='text-xl text-center font-bold'>{ result?.title}</div>
    </div>
  )
}
