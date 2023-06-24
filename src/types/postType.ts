// export type PostType = {
//   id: string | number
//   title: string
//   text: string
//   image?: string
//   likes: number
//   dislikes: number
//   isPopular: boolean
//   view?: 'head' | 'main' | 'sideBar'
//   isLiked?:boolean
//   isDisliked?:boolean
//   isFavorite:boolean
// }


export type PostTypeTms = {
  id: number
  title: string
  text: string
  image?: string
  likes: number
  dislikes: number
  isPopular: boolean
  view?: 'head' | 'main' | 'sideBar'
  isLiked?:boolean
  isDisliked?:boolean
  isFavorite:boolean
}