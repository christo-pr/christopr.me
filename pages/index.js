import Head from "next/head"

import styles from "styles/Home.module.css"
import Footer from "components/ui/Footer"
import Christopr from "components/Christopr"
import christoprJSON from "christopr.json"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christopr | Portafolio</title>
      </Head>

      <main className={styles.main}>
        <Christopr items={christoprJSON} />
      </main>
      <Footer />
    </div>
  )
}
