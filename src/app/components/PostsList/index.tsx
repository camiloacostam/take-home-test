import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { IPost } from "../../../types/types"
import { getPosts, selectPostData } from "../../routes/home/api/getPostsSlice"
import Post from "../post"
import { PostsContainer } from "./styled"

interface IPostsListProps {
  postsUrl: string
  listSize: number
  updateInterval: number
}

export default function PostsList({
  postsUrl,
  listSize,
  updateInterval,
}: IPostsListProps) {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPostData)

  useEffect(() => {
    dispatch(getPosts({ requestUrl: postsUrl, listSize }))
    const intervalValue = setInterval(
      () => dispatch(getPosts({ requestUrl: postsUrl, listSize })),
      updateInterval
    )

    return () => {
      clearInterval(intervalValue)
    }
  }, [])

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </PostsContainer>
  )
}
