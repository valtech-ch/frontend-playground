import 'styles/base.css'
import 'styles/post-page.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import LayoutBlank from 'components/organisms/LayoutBlank/LayoutBlank'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
	const head = (
		<Head>
			<title>Frontent Practice Area Blog - Valtech Switzerland</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)

	return (
		<LayoutBlank head={head}>
			<Component {...pageProps} />
		</LayoutBlank>
	)
}
