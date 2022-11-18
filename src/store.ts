import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
// reducers
import getPostsSlice from "./app/routes/home/api/getPostsSlice"

export const store = configureStore({
  reducer: {
    getPosts: getPostsSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
