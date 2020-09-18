import Link from 'components/atoms/Link'
import LinkExternal from 'components/atoms/LinkExternal'
import Logo from 'components/molecules/Logo'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const HeaderStyled = styled.header(tw`bg-black flex w-full justify-between items-center p-4 pb-20`)
const LogoWrapper = styled.div(tw`w-32`)
const List = styled.ul(tw`text-white`)
const ListItem = styled.li(tw`inline-block mr-10`)

export default function Header(): React.ReactElement {
  return (
    <HeaderStyled>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <List>
        <ListItem>
          <Link href="/about">About Us</Link>
        </ListItem>
        <ListItem>
          <LinkExternal href="https://github.com/valtech-ch" target="_blank" rel="noopener noreferrer">
            Github
          </LinkExternal>
        </ListItem>
      </List>
    </HeaderStyled>
  )
}
