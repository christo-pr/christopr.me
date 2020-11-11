import React from "react"

import styles from "styles/Footer.module.css"

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      Made with ❤️ - &nbsp;
      <a
        href="https://github.com/christo-pr"
        target="_blank"
        rel="noopener noreferrer"
      >
        christo-pr
      </a>
    </footer>
  )
}
