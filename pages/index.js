import Head from "next/head"

import styles from "../styles/Home.module.css"
import Footer from "../components/Footer"
import Christopr from "../components/Christopr"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Christopr />
      </main>

      <Footer />
    </div>
  )
}
