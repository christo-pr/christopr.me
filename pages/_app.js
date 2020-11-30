import Head from "next/head"
import "styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Turret+Road&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Welcome to my personal website! Hope you like it!"
        ></meta>
        <meta name="keywords" content="Javascript, React, Programming"></meta>
        <meta name="author" content="Christofer Flores"></meta>
        <meta property="og:title" content="Christofer Flores Website"></meta>
        <meta
          property="og:description"
          content="Welcome to my personal website! Hope you like it!"
        ></meta>
        <meta
          property="og:image"
          content="https://avatars3.githubusercontent.com/u/14341735?s=60&v=4"
        ></meta>
        <meta property="og:url" content="https://christopr.me"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
