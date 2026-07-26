"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./landing.module.scss";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoArrowDown,
  IoArrowForward,
  IoSparkles,
} from "react-icons/io5";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { value: "20+", label: "Years in Finance" },
  { value: "3", label: "Books Published" },
  { value: "DBA", label: "· LL.M · CFP · FCCA" },
];

export default function Landing() {
  const auroraRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e) => {
      if (!auroraRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      auroraRef.current.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reduceMotion]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  const floatAnim = reduceMotion
    ? undefined
    : {
        y: [0, -12, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <section className={styles.landing} id="home">
      {/* Animated ambient background */}
      <div className={styles.bgLayer} aria-hidden="true">
        <div ref={auroraRef} className={styles.aurora}>
          <span className={`${styles.blob} ${styles.blobGold}`} />
          <span className={`${styles.blob} ${styles.blobBlue}`} />
          <span className={`${styles.blob} ${styles.blobDeep}`} />
        </div>
        <div className={styles.grid} />
        <div className={styles.noise} />
      </div>

      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className={styles.content}>
          <motion.div className={styles.badge} variants={item}>
            <span className={styles.badgeDot} />
            Available for speaking &amp; mentoring
          </motion.div>

          <motion.p className={styles.kicker} variants={item}>
            <IoSparkles size={14} />
            Finance · Mentorship · Wealth Strategy
          </motion.p>

          <motion.h1 className={styles.name} variants={item}>
            Dr. Andreas
            <br />
            <span className={styles.gradientText}>Svoboda</span>
          </motion.h1>

          <motion.p className={styles.bio} variants={item}>
            Lecturer, mentor, and wealth planning expert helping people and
            institutions navigate finance with clarity and confidence.
          </motion.p>

          <motion.div className={styles.ctaGroup} variants={item}>
            <a className={styles.ctaPrimary} href="#about">
              <span>Discover my work</span>
              <IoArrowForward size={18} />
            </a>
            <a className={styles.ctaSecondary} href="#contact">
              Let&apos;s connect
            </a>
          </motion.div>

          <motion.div className={styles.stats} variants={item}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.portraitBlock}
          variants={item}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          <motion.div className={styles.portraitFloat} animate={floatAnim}>
            <div className={styles.conicRing} aria-hidden="true" />
            <div className={styles.glowRing} aria-hidden="true" />
            <div className={styles.orbit} aria-hidden="true">
              <span className={styles.orbitDot} />
              <span className={styles.orbitDot} />
              <span className={styles.orbitDot} />
            </div>
            <div className={styles.imageContainer}>
              <img src={"/person-landing.png"} alt="Dr. Andreas Svoboda" />
            </div>

            <div className={`${styles.chip} ${styles.chipTop}`}>
              <span className={styles.chipValue}>CFP</span>
              <span className={styles.chipLabel}>Certified Planner</span>
            </div>
            <div className={`${styles.chip} ${styles.chipBottom}`}>
              <span className={styles.chipValue}>DBA</span>
              <span className={styles.chipLabel}>Doctorate</span>
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
            <IoLogoLinkedin size={22} />
          </a>
          <a
            className={styles.socialButton}
            href="https://youtube.com/@SvobodaFinance"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <IoLogoYoutube size={22} />
          </a>
          <span className={styles.socialLine} aria-hidden="true" />
        </motion.div>
      </motion.div>

      <a className={styles.scrollCue} href="#about" aria-label="Scroll to about">
        <span>Scroll</span>
        <IoArrowDown size={16} />
      </a>
    </section>
  );
}
