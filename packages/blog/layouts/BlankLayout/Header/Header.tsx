import Link from 'components/atoms/Link/Link'
import LinkExternal from 'components/atoms/LinkExternal/LinkExternal'
import Logo from 'components/molecules/Logo/Logo'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const Header_ = styled.header(tw`bg-black flex w-full justify-between items-center`)
const LogoWrapper = styled.div(tw`w-32`)
const List = styled.ul(tw`text-white`)
const ListItem = styled.li(tw`inline-block mr-10`)

export default function Header(): React.ReactElement {
  return (
    <Header_>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <List>
        <ListItem>
          <Link href="/blog">Blog</Link>
        </ListItem>
        <ListItem>
          <LinkExternal href="https://github.com/valtech-ch" target="_blank" rel="noopener noreferrer">
            Github
          </LinkExternal>
        </ListItem>
      </List>
    </Header_>
  )
}
