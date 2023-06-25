import { MyResponseTypeTms } from "../../types/responseType";
import { PostsActionType, PostsStateType } from "./types";

const initValue: PostsStateType = {
  count:0,
  list: []
}

export const postsReducer = (state: PostsStateType = initValue, action: PostsActionType): PostsStateType => {

  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        count:(action.payload as MyResponseTypeTms).count,
        list: ((action.payload as MyResponseTypeTms).results).map(item => {
          return {
            ...item,
            likes: Math.round(Math.random() * (1000)),
            dislikes: Math.round(Math.random() * 100),
            isDisliked: false,
            isFavorite: false,
            isPopular: Math.random() < 0.5,
          }
        })
      }
    case 'LIKE_POST':
      return {
        count:(action.payload as MyResponseTypeTms).count,
        list: state.list.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              likes: (item.isLiked ? item.likes - 1 : item.likes + 1),
              dislikes: (!item.isLiked && item.isDisliked) ? item.dislikes - 1 : item.dislikes,
              isLiked: item.isLiked ? false : true,
              isDisliked: false,
            }
          }
          else {
            return item
          }
        })
      }
    case 'DISLIKE_POST':
      return {
        count:(action.payload as MyResponseTypeTms).count,
        list: state.list.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              dislikes: (item.isDisliked ? item.dislikes - 1 : item.dislikes + 1),
              likes: (item.isLiked && !item.isDisliked) ? item.likes - 1 : item.likes,
              isDisliked: item.isDisliked ? false : true,
              isLiked: false
            }
          }
          else {
            return item
          }
        })
      }
    case 'SET_FAVORITE_POST':
      return {
        count:(action.payload as MyResponseTypeTms).count,
        list: state.list.map(item => {
          if (item.id === action.payload) {
            if (item.isFavorite) {
              return {
                ...item,
                isFavorite: false
              }
            } else {
              return {
                ...item,
                isFavorite: true
              }
            }
          }
          else return item
        })
      }
    default:
      return state
  }
}
