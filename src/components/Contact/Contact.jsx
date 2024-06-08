import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import Bio from '../../data/hero.json'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href={`mailto:${Bio.email}`}>chetanchauhan0408@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer">
            https://www.linkedin.com/in/chetanchauhan0408
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href={Bio.github}
            target="_blank"
            rel="noreferrer">
            github.com/Chetanchauhangithub
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/coding.png")} alt="Github icon" />
          <a
            href={Bio.leetcode}
            target="_blank"
            rel="noreferrer">
            leetcode.com/u/Chetanchauhan048
          </a>
        </li>
      </ul>
    </footer>
  );
};
