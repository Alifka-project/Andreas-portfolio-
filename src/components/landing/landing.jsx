"use client";

import { useRef, useEffect } from "react";
import Image from "next/legacy/image";
import styles from "./landing.module.scss";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";

export default function Landing() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      // Calculate mouse position as percentage
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // Calculate movement (adjust 20 for more/less movement)
      const moveX = (x - 0.5) * 40; // 20px max movement
      const moveY = (y - 0.5) * 40;

      // Apply the transform
      bgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.landing} id="home">
      <div ref={bgRef} className={styles.imageWrapper}>
        <Image
          className={styles.landingBG}
          src={"/landing-bg.png"}
          alt="landing-bg.png"
          layout="fill"
          priority
          quality={100}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.bioContainer}>
          <div className={styles.name}>
            Dr. Andreas <br /> Svoboda
          </div>
          <div className={styles.bio}>
            Lecturer | Mentor | Finance & Wealth Planning Expert
          </div>
          <div className={styles.cta}>
            <a href="#about">ABOUT ME</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={"/person-landing.png"} alt="landing-profile.png" />
        </div>
        <div className={styles.socialContainer}>
          <a
            className={styles.socialButton}
            href="https://www.linkedin.com/in/andreas-svoboda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={28} />
          </a>
          <a
            className={styles.socialButton}
            href="https://youtube.com/@SvobodaFinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
