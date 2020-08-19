import Link_ from 'next/Link'
import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

type LinkProps = {
  children: React.ReactChild
  href: string
  as?: string
  button?: boolean
}

export default function Link({ children, href, as, button = false }: LinkProps): React.ReactElement {
  const buttonClass = button ? 'link--button-link' : undefined
  const Anchor_ = styled.a(tw`cursor-pointer`)

  return (
    <Link_ href={href} as={as}>
      <Anchor_ className={buttonClass}>{children}</Anchor_>
    </Link_>
  )
}
