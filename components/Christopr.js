import React from "react"

import styles from "styles/Christopr.module.css"
import ChristoprItem from "./ui/ChristoprItem"

export default function Christopr(props) {
  const { items } = props

  return (
    <div className={styles["christopr-grid"]}>
      {items.map((item, id) => (
        <ChristoprItem key={`item-type-${id}`} {...item} />
      ))}
    </div>
  )
}
