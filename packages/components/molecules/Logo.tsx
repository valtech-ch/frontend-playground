import Img from 'atoms/Img'
import Link from 'atoms/Link'

export default function Logo(): React.ReactElement {
  return (
    <Link href="/">
      <Img src="/logo.png" alt="Valtech Logo" />
    </Link>
  )
}
