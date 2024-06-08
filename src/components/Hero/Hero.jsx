/* eslint-disable react/no-unescaped-entities */

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";
import Bio from "../../data/hero.json";
import ClickIcon from "../Icon/ClickIcon";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { motion } from "framer-motion"

const Hero = () => {
  useEffect(() => {
    console.log(
      "Is Initialised React GA:",
      ReactGA.isInitialized,
      window.location.pathname + window.location.search
    );
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "My Hero Page",
    });
  }, []);

  const handleClick = (e) => {
    console.log("Clicked", e.target.name);
    //Google Analytics
    ReactGA.event({
      category: "Links Clicked",
      action: e.target.name,
      label: "button-clicked", // optional
      // value: 99,
      
    });
  };
  return (
    <section className={styles.container}>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroimage.png")}
        alt="hero-img"
      />
      <div className={styles.content}>
        <h1 className={styles.titleSalutation}>Hello, I'm</h1>
        <h1 className={styles.title}>{Bio.name}</h1>

        <span className={styles.roles}>
          <Typewriter
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
            }}
          />
        </span>

        <p className={styles.description}>{Bio.description}</p>
        <motion.a
          className={styles.contactBtn}
          onClick={handleClick}
          name="ContactMe"
          href="#contact"
          role="button"
          whileHover={{scale: 1.1}}
          >
          Contact Me
        </motion.a>

        <div className={styles.icons}>
          <ClickIcon
            href={Bio.linkedin}
            src={getImageUrl("contact/linkedinIcon.png")}
            onClick={handleClick}
            name="LinkedIn"
          />
          <ClickIcon
            href={Bio.github}
            src={getImageUrl("contact/githubIcon.png")}
            onClick={handleClick}
            name="GitHub"
          />
          <ClickIcon
            href={`mailto:${Bio.email}`}
            src={getImageUrl("contact/emailIcon.png")}
            onClick={handleClick}
            name="Email"
          />
          <ClickIcon
            href={Bio.leetcode}
            src={getImageUrl("contact/coding.png")}
            onClick={handleClick}
            name="Leetcode"
          />
        </div>
      </div>
      
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
