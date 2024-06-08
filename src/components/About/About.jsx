/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import { fadeIn } from "../../framer_variants/variants";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import {motion} from 'framer-motion'
const About = () => {
  return (
    <motion.section className={styles.container} id="about"
    variants={fadeIn('up', 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount:0}}
    >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="About img"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Summary</h3>
              <p>
                Passionate software engineer skilled in crafting seamless user
                experiences through 4 years of software development,
                specializing in user-friendly systems and robust RESTful APIs.
                Always ready for new challenges with a friendly tech approach.
                Let's make things click!
              </p>
            </div>
          </li>
         
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
              "As a Java backend developer, I specialize in crafting microservices architectures for scalable and resilient applications. With expertise in SpringBoot,Spring Cloud, Docker, and Kubernetes, I design and implement robust backend systems that meet the demands of modern, cloud-native environments. Leveraging my strong foundation in Java development, along with a focus on clean code and best practices, I deliver efficient and maintainable solutions tailored to drive business success."
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </motion.section>
  );
};

export default About;
