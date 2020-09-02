import Link_ from 'next/link'

type LinkProps = {
	children: React.ReactChild
	href: string
	as?: string
}

export default function Link({ children, href, as }: LinkProps): React.ReactElement {
	return (
		<Link_ href={href} as={as}>
			<a>{children}</a>
		</Link_>
	)
}
