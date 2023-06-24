import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { themeReducer } from "./theme/reducer";
import { FavPostReducer } from "./favPosts/reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { registrationReducer } from "./registration/reducer";
import { activationReducer } from "./activation/reducers";
import { authReducer } from "./auth/reducer";
import { postsReducer } from "./post/reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  favPost:FavPostReducer,
  register: registrationReducer,
  activater:activationReducer,
  auth:authReducer,
  post:postsReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware)
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>