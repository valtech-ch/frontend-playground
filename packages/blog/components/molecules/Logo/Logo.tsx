import A from 'components/atoms/A/A'
import Img from 'components/atoms/Img/Img'

export default function Logo(): React.ReactElement {
  return (
    <A href="https://github.com/valtech-ch" target="_blank" rel="noopener noreferrer">
      <Img src="/logo.png" alt="Valtech Logo" />
    </A>
  )
}
