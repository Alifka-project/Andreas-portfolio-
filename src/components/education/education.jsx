"use client";

import SlideRightLeft from "@/components/animations/slideRightLeft";

import Image from "next/legacy/image";
import styles from "./education.module.scss";

import Card from "@/components/cards/cardCertificate";

export default function Education() {
  return (
    <div className={styles.education} id="education">
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
              src={"/edu.jpg"}
              alt="edu.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>E D U C A T I O N</div>
          <div className={styles.content}>
            <Card
              image={"/uni/uzh.png"}
              year={"2018 - 2020"}
              title={`LL.M. International Business Law,\nUniversity of Zurich`}
            />
            <Card
              image={"/uni/uol.png"}
              year={"2018 - 2019"}
              title={"MSc in Professional Accountancy,\nUniversity of London"}
            />
            <Card
              image={"/uni/uni-liverpool.png"}
              year={"2010 - 2017"}
              title={
                "Doctor of Business Administration (DBA),\nUniversity of Liverpool"
              }
            />
            <Card
              image={"/uni/unisq.png"}
              year={"2002 - 2004"}
              title={
                "Master of Business Administration (MBA),\nUniversity of Southern Queensland"
              }
            />
          </div>
        </div>
      </SlideRightLeft>
    </div>
  );
}
