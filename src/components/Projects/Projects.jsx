
import styles from "./Projects.module.css";

import projects from "../../data/projetcs.json";
import { ProjectCard } from "./ProjectCard";
import {motion} from 'framer-motion'
import { fadeIn } from "../../framer_variants/variants";

const Projects = () => {
  return (
    <motion.section className={styles.container} id="projects"
    variants={fadeIn('up', 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount:0}}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </motion.section>
  );
};

export default Projects