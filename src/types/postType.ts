export type PostType = {
  id: string
  title: string
  text: string
  image?: string
  likes: number
  dislikes: number
  isPopular: boolean
  view?: 'head' | 'main' | 'sideBar'
}


export type PostTypeTms = {
  id:string
  title:string
  text:string
}