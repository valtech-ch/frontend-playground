import Img from 'components/atoms/Img/Img'
import Link from 'components/atoms/Link/Link'

export default function Logo(): React.ReactElement {
  return (
    <Link href="/">
      <Img src="/logo.png" alt="Valtech Logo" />
    </Link>
  )
}
