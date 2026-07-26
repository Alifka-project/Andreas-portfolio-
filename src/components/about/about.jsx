"use client";

import Image from "next/legacy/image";
import styles from "./about.module.scss";

import GenericAnimation from "@/components/animations/generic";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.left}>
          <GenericAnimation
            className={styles.personWrapper}
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animateInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 0.77, 0.47, 0.97],
              when: "beforeChildren",
            }}
            viewportOptions={{
              once: false,
              amount: 0.3,
              margin: "0px 0px -50px 0px",
            }}
          >
            <Image
              src="/person-about.jpg"
              alt="Dr. Andreas Svoboda"
              layout="responsive"
              width={480}
              height={600}
              objectFit="cover"
              quality={100}
              priority
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 350px, (max-width: 1023px) 400px, (max-width: 1279px) 400px, 480px"
            />
          </GenericAnimation>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>A B O U T</div>
          <div className={styles.hook}>
            Helping You Achieve Success Through Strategic Financial Planning &
            Risk Management
          </div>
          <div className={styles.detail}>
            <b>Dr. Andreas Svoboda</b> is a distinguished finance and insurance
            expert with over two decades of experience.
            <br />
            <br />
            Holding a Doctor of Business Administration (DBA) and an LL.M. in
            International Business Law, he is also a Certified Financial Planner
            (CFP) and a Fellow of the Association of Chartered Certified
            Accountants (FCCA).
            <br />
            <br />
            His career encompasses leadership roles in prominent financial
            institutions, academic contributions, and authorship, reflecting a
            profound commitment to advancing financial literacy and ethical
            practices.
          </div>
        </div>
      </div>
    </div>
  );
}
