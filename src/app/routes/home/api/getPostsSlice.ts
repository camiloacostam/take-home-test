import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../../store"
import { IPost } from "../../../../types/types"
import GetPostsServices from "./services"

interface IGetPostState {
  loading: boolean
  error: any
  posts: IPost[]
}

const initialState: IGetPostState = {
  loading: false,
  error: null,
  posts: [],
}

export const getPosts = createAsyncThunk(
  "getPosts",
  async (
    { requestUrl, listSize }: { requestUrl: string; listSize: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await GetPostsServices({ requestUrl, listSize })

      return response
    } catch (error: any) {
      return rejectWithValue(error.response)
    }
  }
)

const getPostsSlice = createSlice({
  name: "getPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false
      state.error = null
      state.posts = action.payload
    })
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.posts = []
    })
  },
})

export default getPostsSlice.reducer

export const selectPostData = (state: RootState) => state.getPosts.posts

export const selectGetPostLoading = (state: RootState) => state.getPosts.loading

export const selectGetPostError = (state: RootState) => state.getPosts.error
