import React from 'react'
import Typography from 'components/Typography'

const Container = styled.div(tw`bg-red-300`)
const AuthorImage = style.img(tw``)

export default function AuthorWidget({authorName, content, children}) {
  return (
    <Container>
      <AuthorImage />

      <Typography variant="h1">{authorName}</Typography>
      <Typography variant="p">{content}</Typography>
    </Container>
  )
}


import React from 'react'

export default function Typography({variant, children}) {
    return (
        <varian>
            {children}
        </variant>
    )
}
