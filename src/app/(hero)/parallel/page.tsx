import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Gallery",
};


export default function Parallel() {
  return (
    <div className='w-full p-4 text-center rounded bg-pink-200'>
      @children
    </div>
  )
}
