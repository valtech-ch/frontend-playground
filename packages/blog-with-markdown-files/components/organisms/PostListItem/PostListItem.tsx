import { BlogPost } from 'types/blog'
import Link from 'components/atoms/Link'

import {
  PostListItem as PostListItemStyled,
  PostDetailsWrapper,
  PostDetails,
  PostCategories,
  PostTitle,
  PostByline,
} from './styles'

type PostListItemProps = {
  blogPost: BlogPost
  index: number
}

export default function PostListItem({ blogPost, index }: PostListItemProps): React.ReactElement {
  return (
    <PostListItemStyled featuredImage={blogPost.featuredImage} index={index}>
      <PostDetailsWrapper featuredImage={blogPost.featuredImage}>
        <PostDetails>
          <PostCategories>{blogPost.tags?.join(' | ')}</PostCategories>
          <PostTitle>{blogPost.title}</PostTitle>
          <PostByline>{`${blogPost.author} | ${blogPost.publishDate}`}</PostByline>
        </PostDetails>
      </PostDetailsWrapper>

      <Link href={`blog/${blogPost.slug}`} button>
        Read More
      </Link>
    </PostListItemStyled>
  )
}
