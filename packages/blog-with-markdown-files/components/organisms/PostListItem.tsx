import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
import { BlogPost } from 'types/blog'
import { url } from 'inspector'
import Link from 'components/atoms/Link'

type PostListItemProps = {
  blogPost: BlogPost
}

type PostListItemStyleProps = {
  hasFeaturedImage: boolean
}

export default function Post({ blogPost }: PostListItemProps): React.ReactElement {
  const PostListItem_ = styled.li(tw`m-0 p-4 w-full md:w-1/2`)
  const PostDetailsWrapper_ = styled.div(tw`flex-1`)
  const PostDetails_ = styled.div(tw`flex flex-col h-full`)
  const PostTitle_ = styled.h2(tw`mt-auto text-xl`)
  const PostByline_ = styled.p(tw`text-xs`)
  const PostCategories_ = styled.p(tw`text-xs`)

  const backgroundStyles = blogPost.featuredImage
    ? {
        background: `url(${blogPost.featuredImage}), rgba(0,0,0,0.4)`,
        backgroundBlendMode: `multiply`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }
    : {}
  const hasFeaturedImage = blogPost.featuredImage && blogPost.featuredImage.length > 0

  return (
    <PostListItem_
      className={`post-list__post-item ${hasFeaturedImage ? 'post-list__post-item--image' : ''}`}
      style={backgroundStyles}
    >
      <PostDetailsWrapper_
        className={`post-item__details-wrapper ${hasFeaturedImage ? 'post-item__details-wrapper--image' : ''}`}
      >
        <PostDetails_ className={`post-item__details`}>
          <PostCategories_ className="post-item__categories">Javascript</PostCategories_>
          <PostTitle_ className="post-item__title">{blogPost.title}</PostTitle_>
          <PostByline_ className="post-item__byline">
            {blogPost.author} | {blogPost.publishDate}
          </PostByline_>
        </PostDetails_>
      </PostDetailsWrapper_>

      <Link href={`blog/${blogPost.slug}`} button={true}>
        Read More
      </Link>
    </PostListItem_>
  )
}
