import { useEffect, useState } from "react"
import Head from "next/head"

import styles from "styles/Home.module.css"
import Footer from "components/ui/Footer"
import Christopr from "components/Christopr"
import christoprJSON from "christopr.json"

export default function Home() {
  const [showProjects, setShowProjects] = useState(false)
  const [items, setItems] = useState(christoprJSON)

  useEffect(() => {
    const inversedItems = items.map((item) => {
      return {
        ...item,
        inverted: !item.inverted,
      }
    })

    setItems(inversedItems)
  }, [showProjects])

  return (
    <div className={styles.container}>
      <Head>
        <title>Christopr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Christopr
          items={items}
          toggleProjects={() => setShowProjects((old) => !old)}
        />
      </main>

      <Footer />
    </div>
  )
}
