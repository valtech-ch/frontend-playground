import Logo from 'components/molecules/Logo'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const Footer = styled.footer(tw`bg-black flex justify-center w-full`)
const FooterContent = styled.div(tw`w-64`)

export default function BlankLayout(): React.ReactElement {
  return (
    <Footer>
      <FooterContent>
        <Logo />
      </FooterContent>
    </Footer>
  )
}
