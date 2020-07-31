import Img from 'components/atoms/Img'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const Footer = styled.footer(tw`bg-black text-white flex justify-center w-full`)
const FooterContent = styled.div(tw`w-64`)

export default function BlankLayout(): React.ReactElement {
  return (
    <Footer>
      <FooterContent>
        <Img alt="" src="https://ca.slack-edge.com/T04UL2109-UUR631KMK-bfb35a90cec0-512"></Img>
        <strong>Jason Wilson</strong>
        <p>
          Frontend Developer with Valtech, Web Generalist, and former Maritime Officer. I love to solve problems and
          pick up new tools along the way.
        </p>
      </FooterContent>
    </Footer>
  )
}
