import "styles/base.css";

import BlankLayout from "layouts/BlankLayout/BlankLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <BlankLayout>
      <Component {...pageProps} />
    </BlankLayout>
  );
}
