import Head from "next/head"

import styles from "styles/Home.module.css"
import Footer from "components/ui/Footer"
import Christopr from "components/Christopr"
import christoprJSON from "christopr.json"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopr</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Turret+Road&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Christopr items={christoprJSON} />
      </main>

      <Footer />
    </div>
  )
}
