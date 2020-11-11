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
        <Twitter />
      </li>
      <li>
        <Linkedin />
      </li>
      <li>
        <Github />
      </li>
    </ul>
  )
}
