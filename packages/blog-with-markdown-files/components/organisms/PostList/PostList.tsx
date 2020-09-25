import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import { BlogPost } from 'types/blog'

import PostListItem from 'components/organisms/PostListItem/PostListItem'

const PostListStyled = styled.ul(
  tw`flex w-full flex-wrap justify-between items-center`,
)

type PostListProps = {
  blogPosts: BlogPost[]
}

export default function PostList({
  blogPosts,
}: PostListProps): React.ReactElement {
  return (
    <PostListStyled>
      {blogPosts
        .filter((post) => post.published)
        .map((post, index) => {
          return <PostListItem blogPost={post} index={index} key={post.id} />
        })}
    </PostListStyled>
  )
}
