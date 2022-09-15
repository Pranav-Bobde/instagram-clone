// import Head from 'next/head'
// import { Global } from '@emotion/react'
// import xw from 'xwind'

// function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>Tailwindcss Emotion Example</title>
//       </Head>
//       <Global
//         //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
//         styles={xw`XWIND_BASE XWIND_GLOBAL`}
//       />
//       <Component {...pageProps} />
//     </>
//   )
// }

// export default App
import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps} } ) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
