import { BlogPost } from 'types/blog'
import { CONTENTS_BLOG_POSTS_PATH } from 'constants/blog'
import { GetStaticProps } from 'next'
import { Link } from '@valtech-ch/components'
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { v4 as uuid } from 'uuid'

type IndexPageProps = {
  blogPosts: BlogPost[]
}

export default function IndexPage({ blogPosts }: IndexPageProps): React.ReactElement {
  return (
    <div>
      <h1>Blog list</h1>
      <ul>
        {blogPosts.map((blogPost) => {
          return (
            <li key={blogPost.id}>
              <Link href={`/blog/${blogPost.slug}`}>{blogPost.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}`, 'utf-8')

  const blogPosts = files
    .filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      const { data } = matter(rawContent)

      return { ...data, id: uuid() }
    })

  // By returning { props: blogPosts }, the IndexPage component
  // will receive `blogPosts` as a prop at build time
  return {
    props: { blogPosts },
  }
}
