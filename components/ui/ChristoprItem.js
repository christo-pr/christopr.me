import React from "react"
import Link from "next/link"
import { FaRegUserCircle as UserIcon } from "react-icons/fa"
import { RiCodeSSlashLine as AboutIcon } from "react-icons/ri"
import { GrAchievement as ProjectsIcon } from "react-icons/gr"

import Placeholder from "./Placeholder"
import MySocials from "./MySocials"

const ICONS = {
  me: UserIcon,
  about: AboutIcon,
  projects: ProjectsIcon,
}

export default function ChristoprItem(props) {
  const { type, title, text, link, onClick, inverted } = props

  // Projects
  if (type === "empty") {
    return <div className={inverted ? "empty is-inverted" : "empty"} />
  }

  const Icon = ICONS[type]

  return (
    <div
      className={inverted ? "is-inverted" : ""}
      onClick={(e) => onClick && onClick(e)}
    >
      {Icon && <Icon size={80} />}
      {title && <h1>{title}</h1>}
      {text && <p>{text}</p>}
      {link && <Link href={link.to}>{link.text}</Link>}
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
