import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate React by Galvs - Doubty</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
