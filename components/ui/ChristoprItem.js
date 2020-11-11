import React from "react"
import Link from "next/link"
import { FaRegUserCircle as UserIcon } from "react-icons/fa"
import { RiCodeSSlashLine as AboutIcon } from "react-icons/ri"
import { GrAchievement as ProjectsIcon } from "react-icons/gr"

import styles from "styles/ChristoprItem.module.css"
import Placeholder from "./Placeholder"
import MySocials from "./MySocials"

const ICONS = {
  me: UserIcon,
  about: AboutIcon,
  projects: ProjectsIcon,
}

export default function ChristoprItem(props) {
  const { type, title, text, link, onClick, inverted, info } = props

  const Icon = ICONS[type]
  const containerClasses = `${styles["chpr-item"]} ${
    inverted ? "show" : "hide"
  } ${type === "placeholder" ? "placholder" : ""}`

  return (
    <div
      className={containerClasses}
      onClick={() => type === "projects" && onClick()}
    >
      {Icon && <Icon size={80} />}
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
      {link && <Link href={link.to}>{link.text}</Link>}
      {type === "project" && (
        <a href={info.url} target="_blank">
          <h3>{info.name}</h3>
          <img src={info.image} alt={info.name} />
        </a>
      )}
      {type === "socials" && (
        <>
          <h2>Sigueme!</h2>
          <MySocials />
        </>
      )}
      {type === "placeholder" && <Placeholder />}
      {type === "work" && (
        <>
          <p>
            Software Developer at{" "}
            <a
              href="https://michelada.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              michelada.io
            </a>
          </p>
          <p>Living in Colima, Mex.</p>
        </>
      )}
    </div>
  )
}
