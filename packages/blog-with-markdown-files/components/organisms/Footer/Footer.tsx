import Img from 'components/atoms/Img'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const Footer = styled.footer(tw`bg-black text-white flex justify-center w-full`)
const FooterContent = styled.div(tw`mt-16 mr-8 ml-8 mb-8 border-4 flex`)
const FooterAvatar = styled.div(
  tw`flex-shrink-0 w-24 transform -translate-x-6 -translate-y-6`,
)
const FooterText = styled.div(tw`flex-initial pt-4 pr-4 pb-4`)

export default function BlankLayout(): React.ReactElement {
  return (
    <Footer>
      <FooterContent>
        <FooterAvatar>
          <Img
            alt=""
            src="https://ca.slack-edge.com/T04UL2109-UUR631KMK-bfb35a90cec0-512"
          />
        </FooterAvatar>
        <FooterText>
          <strong>Jason Wilson</strong>
          <p>
            Frontend Developer with Valtech, Web Generalist, and former Maritime
            Officer. I love to solve problems and pick up new tools along the
            way.
          </p>
        </FooterText>
      </FooterContent>
    </Footer>
  )
}
