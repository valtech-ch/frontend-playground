import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

type PostListItem = {
  featuredImage?: string
  index: number
}

const colorUtilities = [
  tw`border-valtech-blue`,
  tw`border-valtech-rose`,
  tw`border-valtech-cyan`,
  tw`border-valtech-yellow`,
  tw`border-valtech-turquoise`,
]

export const PostListItem: React.FC<PostListItem> = styled.li`
  ${tw`m-0 p-4 w-full md:w-1/2 flex list-none text-white border-0 border-l-8 hover:border-l-24 transition-border-width duration-100 ease-in-out`}
  ${({ index }: PostListItem) => colorUtilities[index]}
  background: ${({ featuredImage }: PostListItem) => (featuredImage ? `url(${featuredImage}), rgba(0,0,0,0.4)` : '')};
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
`

type PostDetailsWrapper = {
  featuredImage?: string
}
export const PostDetailsWrapper: React.FC<PostDetailsWrapper> = styled.div`
  ${tw`flex-1`}

  &:before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    ${({ featuredImage }: PostDetailsWrapper) => (featuredImage ? tw`pt-80 sm:pt-33` : tw`pt-33`)}
  }

  /* to clear float */
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`
export const PostDetails = styled.div(tw`flex flex-col h-full`)
export const PostTitle = styled.h2(tw`mt-auto text-xl`)
export const PostByline = styled.p(tw`text-xs`)
export const PostCategories = styled.p(tw`text-xs`)
