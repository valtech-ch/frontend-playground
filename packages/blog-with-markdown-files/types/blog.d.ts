export type BlogPost = {
  id: string
  slug: string
  title: string
  content: string
  author: string
  published: boolean
  publishDate: string
  featuredImage?: string
  category?: string
}
