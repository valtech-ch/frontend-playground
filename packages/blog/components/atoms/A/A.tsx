type AProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
};

export default function A({ children, href, target, rel }: AProps) {
  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}
