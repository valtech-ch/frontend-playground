import 'styles/base.css'

import { AppProps } from 'next/app'
import { LayoutBlank } from '@valtech-ch/components'
import React from 'react'

export default function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <LayoutBlank>
      <Component {...pageProps} />
    </LayoutBlank>
  )
}
