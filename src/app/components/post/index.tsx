import { IPost } from "../../../types/types"
import { PostDetailContainer, PostDate, PostTextContainer } from "./styled"
import { format, parseISO } from "date-fns"

interface IPostProps {
  post: IPost
}

export default function Post({ post }: IPostProps) {
  return (
    <PostDetailContainer>
      <PostTextContainer>
        <p>{post.text}</p>
        <p className="author"> - {post.user.name}</p>
      </PostTextContainer>
      <PostDate>
        Posted: {format(new Date(post.created_at), "iii LLL dd HH:MM")}
      </PostDate>
    </PostDetailContainer>
  )
}
