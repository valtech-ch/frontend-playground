import Footer from 'organisms/Footer'
import Head from 'next/head'
import Header from 'organisms/Header'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const Container = styled.div(tw`flex flex-col min-h-screen`)
const Main = styled.main(tw`flex-grow bg-black text-white`)

type LayoutBlankProps = {
  children: React.ReactNode
}

export default function LayoutBlank({ children }: LayoutBlankProps): React.ReactElement {
  return (
    <Container>
      <Head>
        <title>Frontent Practice Area Blog - Valtech Switzerland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>{children}</Main>

      <Footer />
    </Container>
  )
}
