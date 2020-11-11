import React, { useState } from "react"

import styles from "styles/Christopr.module.css"
import ChristoprItem from "./ui/ChristoprItem"

export default function Christopr(props) {
  const [inverted, setInverted] = useState(false)

  const items = [
    {
      type: "me",
      title: "José Christofer Flores Ortega",
    },
    {
      type: "about",
      link: {
        to: "/about",
        text: "Acerca de mi",
      },
    },
    {
      type: "empty",
    },
    {
      type: "socials",
    },
    {
      type: "work",
    },
    {
      type: "empty",
    },
    {
      type: "text",
      text: "Surfin Waves and code",
    },
    {
      type: "placeholder",
    },
    {
      type: "emtpy",
    },
    {
      type: "placeholder",
    },
    {
      type: "emtpy",
    },
    {
      type: "projects",
      text: "Mis Projectos",
      onClick: () => setInverted((old) => !old),
    },
  ]
  return (
    <div className={styles["christopr-grid"]}>
      {items.map((item, id) => (
        <ChristoprItem key={`item-type-${id}`} {...item} inverted={inverted} />
      ))}
    </div>
  )
}
