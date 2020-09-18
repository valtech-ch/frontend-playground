import { GetStaticPaths, GetStaticProps } from 'next'

import { BlogPost } from 'types/blog'
import { CONTENTS_BLOG_POSTS_PATH } from 'constants/blog'
import React from 'react'
import fs from 'fs'
import grayMatter from 'gray-matter'
import remarkHighlight from 'remark-highlight.js'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import unified from 'unified'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

type BlogPostPageProps = {
	blogPost: BlogPost
}

export const Section = styled.section`
	${tw`px-10 py-8`}

	p {
		${tw`mb-4`}
	}

	h2 {
		${tw`text-3xl font-bold mb-1`}
	}

	h3 {
		${tw`text-2xl font-bold mb-1`}
	}
`

export default function BlogPostPage({ blogPost }: BlogPostPageProps): React.ReactElement {
	return (
		<div>
			<h1>{blogPost.title}</h1>
			<Section dangerouslySetInnerHTML={{ __html: blogPost.content }}></Section>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	if (!context.params) {
		throw new Error('Undefined "context.params')
	}

	const slug = context.params.slug // get slug from params
	const path = `${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}/${slug}.md`

	// read file content
	const rawContent = fs.readFileSync(path, {
		encoding: 'utf-8',
	})

	// get "data" and "content" with "gray-matter"
	const { data, content } = grayMatter(rawContent)

	const result = await unified()
		.use(remarkParse)
		// highlight code blocks
		.use(remarkHighlight)
		.use(remarkHtml)
		.process(content)

	return {
		props: {
			blogPost: {
				...data,
				content: result.toString(),
			},
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const path = `${process.cwd()}/${CONTENTS_BLOG_POSTS_PATH}`
	const files = fs.readdirSync(path, 'utf-8')

	const markdownFileNames = files.filter((fn) => fn.endsWith('.md')).map((fn) => fn.replace('.md', ''))

	return {
		paths: markdownFileNames.map((fileName) => {
			return {
				params: {
					slug: fileName,
				},
			}
		}),
		fallback: false,
	}
}
