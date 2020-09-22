import 'styles/base.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import LayoutBlank from 'components/organisms/LayoutBlank/LayoutBlank'

export default function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  const head = (
    <Head>
      <title>Frontent Practice Area Blog - Valtech Switzerland</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )

  return (
    <LayoutBlank head={head}>
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </LayoutBlank>
  )
}
