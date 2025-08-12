import { NextResponse } from "next/server"
import db from "~/db"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } =await params
    db.update(({articles}) => {
      const index = articles.findIndex(item => item.id === id)
      articles.splice(index, 1)
    })
    return NextResponse.json({
      code: 200,
      message: 'success',
    })
  } catch (e) {
    return NextResponse.json({
      code: 500,
      message: e,
    })
  }
}