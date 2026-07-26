"use client";

import { useRef, useEffect } from "react";
import Image from "next/legacy/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./landing.module.scss";
import { IoLogoLinkedin, IoLogoYoutube, IoArrowDown } from "react-icons/io5";

const ease = [0.22, 1, 0.36, 1];

export default function Landing() {
  const bgRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const moveX = (x - 0.5) * 28;
      const moveY = (y - 0.5) * 28;
      bgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.06)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reduceMotion]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease },
    },
  };

  return (
    <section className={styles.landing} id="home">
      <div ref={bgRef} className={styles.imageWrapper}>
        <Image
          className={styles.landingBG}
          src={"/landing-bg.png"}
          alt=""
          layout="fill"
          priority
          quality={100}
        />
      </div>

      <div className={styles.veil} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb} aria-hidden="true" />

      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className={styles.bioContainer}>
          <motion.p className={styles.kicker} variants={item}>
            Finance · Mentorship · Strategy
          </motion.p>
          <motion.h1 className={styles.name} variants={item}>
            Dr. Andreas
            <br />
            <span>Svoboda</span>
          </motion.h1>
          <motion.p className={styles.bio} variants={item}>
            Lecturer, mentor, and wealth planning expert shaping clearer paths
            through finance.
          </motion.p>
          <motion.div className={styles.ctaGroup} variants={item}>
            <a className={styles.ctaPrimary} href="#about">
              About me
            </a>
            <a className={styles.ctaSecondary} href="#contact">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div className={styles.portraitBlock} variants={item}>
          <motion.div
            className={styles.portraitFloat}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <div className={styles.ring} aria-hidden="true" />
            <div className={styles.imageContainer}>
              <img src={"/person-landing.png"} alt="Dr. Andreas Svoboda" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className={styles.socialContainer} variants={item}>
          <a
            className={styles.socialButton}
            href="https://www.linkedin.com/in/andreas-svoboda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IoLogoLinkedin size={24} />
          </a>
          <a
            className={styles.socialButton}
            href="https://youtube.com/@SvobodaFinance"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <IoLogoYoutube size={24} />
          </a>
        </motion.div>
      </motion.div>

      <a className={styles.scrollCue} href="#about" aria-label="Scroll to about">
        <span>Explore</span>
        <IoArrowDown size={16} />
      </a>
    </section>
  );
}
