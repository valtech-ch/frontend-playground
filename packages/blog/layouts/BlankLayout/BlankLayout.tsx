import Head from "next/head";
import Logo from "components/molecules/Logo/Logo";
import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";

type BlankLayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div(tw`flex flex-col min-h-screen`);
const Header = styled.header(tw`bg-black flex w-full`);
const HeaderContent = styled.div(tw`w-32`);
const Main = styled.main(tw`flex-grow`);
const Footer = styled.footer(tw`bg-black flex justify-center w-full`);
const FooterContent = styled.div(tw`w-64`);

export default function BlankLayout({ children }: BlankLayoutProps) {
  return (
    <Container>
      <Head>
        <title>Frontent Practice Area Blog - Valtech Switzerland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <HeaderContent>
          <Logo />
        </HeaderContent>
      </Header>

      <Main>{children}</Main>

      <Footer>
        <FooterContent>
          <Logo />
        </FooterContent>
      </Footer>
    </Container>
  );
}
