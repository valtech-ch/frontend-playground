type ImgProps = {
  src: string
  alt: string
}

export default function Img({ src, alt }: ImgProps): React.ReactElement {
  return <img src={src} alt={alt} />
}
