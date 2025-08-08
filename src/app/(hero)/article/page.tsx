import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
  title: "Article",
};

export default function Article() {

  const articleList = [
    {
      id: '1',
      title: '文章1',
      content: '这是文章1'
    },
    {
      id: '2',
      title: '文章2',
      content: '这是文章2'
    },
    {
      id: '3',
      title: '文章3',
      content: '这是文章3'
    }
  ]

  return (
    <div className='flex flex-col gap-4'>
      <div>这是article页面</div>
      <div className='flex flex-col gap-2 '>
        {
          articleList.map(v => {
            return (
              <Link className='border-b-2 border-[#000]' key={v.id} href={`/article/${v.id}`}>{v.title}</Link>
            )
          })
        }
      </div>
    </div>
  )
}
