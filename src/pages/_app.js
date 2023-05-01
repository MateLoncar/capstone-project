import { createGlobalStyle } from "../../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <createGlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
