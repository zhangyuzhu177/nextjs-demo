import { NextResponse } from "next/server"

import db from "~/db"

/**
 * 查询所有文章
 */
export async function GET (request: Request) {
  const { articles } = db.data
  
  const response= NextResponse.json({
    code: 200,
    message: 'success',
    data:articles
  })
}

/**
 * 新增文章
 */
export async function POST (request: Request) {
  const res = await request.json()
  await db.update(({ articles }) => articles.push({
    id: Date.now().toString(),
    date: new Date(),
    ...res
  }))
  return NextResponse.json({
    code: 200,
    message: 'success',
  })
}