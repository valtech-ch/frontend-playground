type AProps = {
  children: React.ReactChild
  href: string
  target?: string
  rel?: string
}

export default function A({ children, href, target, rel }: AProps): React.ReactElement {
  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  )
}
