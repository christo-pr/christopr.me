import React from "react"
import Link from "next/link"
import {
  FaRegUserCircle as UserIcon,
  FaExternalLinkSquareAlt as ExternalIcon,
} from "react-icons/fa"
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
  const { type, title, text, link, info } = props

  const Icon = ICONS[type]
  const containerClasses = `${styles["chpr-item"]} ${styles[type]}`

  return (
    <div className={containerClasses}>
      {Icon && <Icon size={80} />}
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
      {link && <Link href={link.to}>{link.text}</Link>}
      {type === "project" && (
        <a href={info.url} target={info.url === "#" ? "_self" : "_blank"}>
          <img src={info.image} alt={info.name} />
          <h3>
            {info.name}
            &nbsp;
            <ExternalIcon size={20} />
          </h3>
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
            Living and making code at Colima, Mex.
            <br />
            Working for a cool company called <br />
            <a
              href="https://michelada.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              michelada.io
            </a>
          </p>
        </>
      )}
    </div>
  )
}
