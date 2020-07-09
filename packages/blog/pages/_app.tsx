import 'styles/base.css'

import { AppProps } from 'next/app'
import BlankLayout from 'layouts/BlankLayout/BlankLayout'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <BlankLayout>
      <Component {...pageProps} />
    </BlankLayout>
  )
}
