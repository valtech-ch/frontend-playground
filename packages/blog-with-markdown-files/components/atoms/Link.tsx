import LinkFromNext from 'next/link'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

type Anchor = {
  button: boolean
}

const Anchor = styled.a(({ button }: Anchor) =>
  button
    ? tw`cursor-pointer block border-4 border-solid border-white self-end py-1 px-2 text-xs ml-2 whitespace-no-wrap`
    : tw`cursor-pointer `,
)

type Link = {
  children: React.ReactChild
  href: string
  as?: string
  button?: boolean
}

export default function Link({ children, href, as, button = false }: Link): React.ReactElement {
  return (
    <LinkFromNext href={href} as={as}>
      <Anchor button={button}>{children}</Anchor>
    </LinkFromNext>
  )
}
