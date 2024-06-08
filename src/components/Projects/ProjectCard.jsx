/* eslint-disable react/prop-types */

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={demo}
          className={styles.link}
          target="_blank"
          rel="noreferrer">
          DEMO
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={source}
          className={styles.link}
          target="_blank"
          rel="noreferrer">
          SOURCE
        </motion.a>
      </div>
    </div>
  );
};
