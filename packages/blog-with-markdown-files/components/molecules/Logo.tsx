import Img from 'components/atoms/Img'
import Link from 'components/atoms/Link'

export default function Logo(): React.ReactElement {
  return (
    <Link href="/">
      <Img src="/logo@2x.png" alt="Valtech Logo" />
    </Link>
  )
}
