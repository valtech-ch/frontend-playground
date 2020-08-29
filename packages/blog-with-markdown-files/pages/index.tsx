import { BlogPost } from 'types/blog'
import { CONTENTS_BLOG_POSTS_PATH } from 'constants/blog'
import { GetStaticProps } from 'next'
import PostList from 'components/organisms/PostList/PostList'
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { v4 as uuid } from 'uuid'

type IndexPageProps = {
  blogPosts: BlogPost[]
}

export default function IndexPage({ blogPosts }: IndexPageProps): React.ReactElement {
  return <PostList blogPosts={blogPosts}></PostList>
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}`, 'utf-8')

  const blogPosts: BlogPost[] = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)

      return {
        id: uuid(),
        slug: data.slug,
        title: data.title,
        author: data.author,
        published: data.published,
        publishDate: data.publishDate,
        featuredImage: data.featuredImage || null,
      } as BlogPost
    })
    .sort((firstPost, nextPost) => {
      return Date.parse(nextPost.publishDate) - Date.parse(firstPost.publishDate)
    })

  // By returning { props: blogPosts }, the IndexPage component
  // will receive `blogPosts` as a prop at build time
  return {
    props: { blogPosts },
  }
}
