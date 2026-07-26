"use client";

import SlideRightLeft from "@/components/animations/slideRightLeft";

import Image from "next/legacy/image";
import styles from "./certificate.module.scss";

import Card from "@/components/cards/cardCertificate";

export default function Certificate() {
  return (
    <div className={styles.certificate} id="certifications">
      <SlideRightLeft
        className={styles.container}
        initial={{ opacity: 0, x: 100 }} // Starts from right (100px)
        animateInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 0.77, 0.47, 0.97],
          delay: 0.1,
        }}
        viewportOptions={{
          once: false,
          amount: 0.3,
          margin: "0px 0px -100px 0px",
        }}
      >
        <div className={styles.backgroundColor} />
        <div className={styles.left}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={"/cert.png"}
              alt="cert.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>C E R T I F I C A T I O N</div>
          <div className={styles.content}>
            <Card
              image={"/experience/CFP.png"}
              year={"2021"}
              title={"Certified Financial Planner (CFP)"}
            />
            <Card
              image={"/experience/sveb.png"}
              year={"2021"}
              title={"SVEB 1 Certificate (Adult Education)"}
            />
            <Card
              image={"/experience/iffp.png"}
              year={"2018"}
              title={
                "Financial Planner with Federal Diploma - IfFP Institute for Financial Planning"
              }
            />
            <Card
              image={"/experience/acca.png"}
              year={"2008 - 2010"}
              title={"Chartered Certified Accountant (FCCA)"}
            />
          </div>
        </div>
      </SlideRightLeft>
    </div>
  );
}
