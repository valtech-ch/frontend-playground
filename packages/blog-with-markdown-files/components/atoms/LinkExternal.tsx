type LinkExternalProps = {
  children: React.ReactChild
  href: string
  target?: string
  rel?: string
}

export default function LinkExternal({ children, href, target, rel }: LinkExternalProps): React.ReactElement {
  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  )
}
