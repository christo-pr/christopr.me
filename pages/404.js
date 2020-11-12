import React from "react"
import Link from "next/link"
import Head from "next/head"
import { RiArrowGoBackLine as BackIcon } from "react-icons/ri"

import styles from "styles/404.module.css"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Christopr | Ups! No hay nada aqui</title>
      </Head>
      <Link href="/">
        <a className={styles.back}>
          <BackIcon />
          &nbsp; Regresar
        </a>
      </Link>
      <div className={styles.notFound}>
        <img src="./404-page.png" alt="Surfing in the middle of nothing" />
      </div>
    </>
  )
}
