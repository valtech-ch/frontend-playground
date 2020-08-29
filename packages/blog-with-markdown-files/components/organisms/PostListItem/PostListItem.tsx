import { BlogPost } from 'types/blog'
import Link from 'components/atoms/Link'

import {
  PostListItem as PostListItem_,
  PostDetailsWrapper,
  PostDetails,
  PostCategories,
  PostTitle,
  PostByline,
} from './styles'

type PostListItemProps = {
  blogPost: BlogPost
}

export default function PostListItem({ blogPost }: PostListItemProps): React.ReactElement {
  return (
    <PostListItem_ featuredImage={blogPost.featuredImage}>
      <PostDetailsWrapper featuredImage={blogPost.featuredImage}>
        <PostDetails>
          <PostCategories>Javascript</PostCategories>
          <PostTitle>{blogPost.title}</PostTitle>
          <PostByline>
            {blogPost.author} | {blogPost.publishDate}
          </PostByline>
        </PostDetails>
      </PostDetailsWrapper>

      <Link href={`blog/${blogPost.slug}`} button={true}>
        Read More
      </Link>
    </PostListItem_>
  )
}
