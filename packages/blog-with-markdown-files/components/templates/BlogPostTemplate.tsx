import { BlogPost } from 'types/blog'

type BlogPostPageProps = {
  blogPost: BlogPost
}

export default function BlogPostTemplate({ blogPost }: BlogPostPageProps): React.ReactElement {
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: blogPost.content }}></section>
    </div>
  )
}
