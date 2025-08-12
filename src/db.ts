import { JSONFilePreset } from "lowdb/node";

export interface Article {
  id: string,
  title: string,
  content: string,
  date: string,
}

const defaultData: {
  articles: Article[]
} = {
  articles: []
}
const db = await JSONFilePreset('db.json', defaultData)

export default db