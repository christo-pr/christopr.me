import React, { useState } from "react"

import styles from "styles/Christopr.module.css"
import ChristoprItem from "./ui/ChristoprItem"

export default function Christopr(props) {
  const { items, toggleProjects } = props

  return (
    <div className={styles["christopr-grid"]}>
      {items.map((item, id) => (
        <ChristoprItem
          key={`item-type-${id}`}
          {...item}
          onClick={toggleProjects}
        />
      ))}
    </div>
  )
}
