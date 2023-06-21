import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/reducer";
import { FavPostReducer } from "./favPosts/reducer";

const rootState = combineReducers({
  theme: themeReducer,
  favPost:FavPostReducer
})

export const store = configureStore({
  reducer: rootState
})


export type AppState = ReturnType<typeof store.getState>