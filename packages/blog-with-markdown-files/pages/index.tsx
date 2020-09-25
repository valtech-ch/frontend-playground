import { BlogPost } from 'types/blog'
import {
  CONTENTS_BLOG_POSTS_PATH,
  IMAGES_BLOG_POSTS_PATH,
} from 'constants/blog'
import { GetStaticProps } from 'next'
import PostList from 'components/organisms/PostList/PostList'
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { v4 as uuid } from 'uuid'

type IndexPageProps = {
  blogPosts: BlogPost[]
}

export default function IndexPage({
  blogPosts,
}: IndexPageProps): React.ReactElement {
  return <PostList blogPosts={blogPosts} />
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(
    `${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}`,
    'utf-8',
  )

  const blogPosts: BlogPost[] = files
    // just MD files
    .filter((fileName) => fileName.endsWith('.md'))
    // files starting with the date
    .filter((fileName) => fileName.match(/\d{4}.\d{2}.\d{2}/) !== null)
    .map((fileName) => {
      const path = `${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}/${fileName}`
      const [date] = fileName.match(/\d{4}.\d{2}.\d{2}/) || []
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)

      const featuredImagePath = `${IMAGES_BLOG_POSTS_PATH}/${fileName.replace(
        '.md',
        '.jpg',
      )}`

      return {
        id: uuid(),
        slug: fileName.replace('.md', ''),
        title: data.title,
        author: data.author,
        published: data.published,
        publishDate: date,
        featuredImage: fs.existsSync(
          `${process.cwd()}/public/${featuredImagePath}`,
        )
          ? `./${featuredImagePath}`
          : null,
        tags: data.tags || ['Blog'],
      } as BlogPost
    })
    .filter((blogPost) => blogPost.published)
    .sort((firstPost, nextPost) => {
      return (
        Date.parse(nextPost.publishDate) - Date.parse(firstPost.publishDate)
      )
    })

  // By returning { props: blogPosts }, the IndexPage component
  // will receive `blogPosts` as a prop at build time
  return {
    props: { blogPosts },
  }
}
