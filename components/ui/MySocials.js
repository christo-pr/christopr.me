import React from "react"
import {
  FaTwitter as Twitter,
  FaLinkedin as Linkedin,
  FaGithub as Github,
} from "react-icons/fa"

export default function MySocials(props) {
  return (
    <ul>
      <li>
        <a
          href="https://twitter.com/christo_pr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/christofer-flores/">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/christo-pr">
          <Github />
        </a>
      </li>
    </ul>
  )
}
