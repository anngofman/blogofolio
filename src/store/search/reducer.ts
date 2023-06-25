import { MyResponseTypeTms } from "../../types/responseType";
import { SearchActionType, SearchStateType } from "./types";

const initValue: SearchStateType = {
  search: '',
  count: 0,
  list: []
}

export const SearchReducer = (state: SearchStateType = initValue, action: SearchActionType): SearchStateType => {

  switch (action.type) {
    case 'LOAD_SEARCH_POSTS':
      return {
        ...state,
        count: (action.payload as MyResponseTypeTms).count,
        list: (action.payload as MyResponseTypeTms).results
      }
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        search: action.payload as string
      }
    case 'CLEAR_SEARCH':
      return {
        ...initValue
      }
    default:
      return state
  }
}
