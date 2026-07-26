"use client";

import Image from "next/legacy/image";
import styles from "./skill.module.scss";

import Tilt from "react-parallax-tilt";

export default function Card({ icon, header, text }) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          {icon && <Image src={icon} alt="icon.png" height={60} width={60} />}
        </div>
        <div className={styles.header}>{header}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </Tilt>
  );
}
