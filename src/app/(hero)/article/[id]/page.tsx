import React from 'react'

interface Article {
  params: {
    id: string
  }
}

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

/**
 * 自定义Metadata函数
 * @param param0 
 * @returns 
 */
export function generateMetadata({ params }:Article) {
  return {
    title:`文章详情 ${params.id}`
  }
}

export default function Page({
  params,
}: Article) {
  const { id } = params

  const article = articleList.find(item => item.id === id)
  
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-2xl font-bold'>{ article?.title }</div>
      <div>{ article?.content }</div>
    </div>
  )
}
