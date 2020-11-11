import React from "react"
import Link from "next/link"
import { FaRegUserCircle as UserIcon } from "react-icons/fa"
import { RiCodeSSlashLine as AboutIcon } from "react-icons/ri"

import styles from "styles/Christopr.module.css"
import MySocials from "components/MySocials"

export default function Christopr(props) {
  return (
    <div className={styles["christopr-grid"]}>
      <div>
        <UserIcon size={80} />
        <h1>Jose Christofer Flores Ortega</h1>
      </div>
      <div>
        <AboutIcon size={80} />
        <Link href="/about">Acerca de mi</Link>
      </div>
      <div></div>
      <div>
        <h2>Sigueme!</h2>
        <MySocials />
      </div>
      <div>
        <p>
          Software Developer at{" "}
          <a
            href="https://michelada.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            michelada.io
          </a>
          Living in Colima, Mex.
        </p>
      </div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </div>
  )
}
