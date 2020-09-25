import Header from 'components/organisms/Header/Header'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const Container = styled.div(tw`flex flex-col min-h-screen`)
const Main = styled.main(tw`flex-grow bg-black text-white`)

type LayoutBlankProps = {
  children: React.ReactNode
  head: React.ReactNode
}

export default function LayoutBlank({
  head,
  children,
}: LayoutBlankProps): React.ReactElement {
  return (
    <Container>
      {head}

      <Header />

      <Main>{children}</Main>
    </Container>
  )
}
