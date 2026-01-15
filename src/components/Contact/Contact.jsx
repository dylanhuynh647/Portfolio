import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return <footer className={styles.container} id="contact">
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:dylan.huynh@torontomu.ca">dylan.huynh@torontomu.ca</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/dylanhuynh647">linkedin.com/in/dylanhuynh647</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
            <a href="https://github.com/dylanhuynh647">github.com/dylanhuynh647</a>
        </li>
    </ul>
  </footer>
}
