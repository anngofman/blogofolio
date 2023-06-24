import { PostTypeTms } from "./postType"

export type MyResponseType<T> = {
  items: T[]
}

export type MyResponseTypeTms={
  count:number
  results: PostTypeTms[]
}