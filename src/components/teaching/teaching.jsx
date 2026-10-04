"use client";

import SlideLeftRight from "@/components/animations/slideLeftRight";

import Image from "next/legacy/image";
import styles from "./teaching.module.scss";

import Card from "@/components/cards/cardExperience";
import { IoSchool } from "react-icons/io5";

export default function Teaching() {
  return (
    <div className={styles.teaching} id="teaching">
      <SlideLeftRight
        className={styles.container}
        initial={{ opacity: 0, x: -100 }} // Starts further left
        animateInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: [0.16, 0.77, 0.47, 0.97], // Custom easing curve
          delay: 0.1, // Slight delay
        }}
        viewportOptions={{
          once: false,
          amount: 0.15,
          margin: "0px 0px -100px 0px", // Triggers earlier
        }}
      >
        <div className={styles.left}>
          <div className={styles.title}>T E A C H I N G</div>
          <div className={styles.content}>
            <Card
              icon={<IoSchool size={28} color="white" />}
              title={"Swiss Distance University of Applied Sciences (FFHS)"}
              href={
                "https://www.ffhs.ch/de/ffhs/personen/person/svoboda-andreas"
              }
              subtitle={"Lecturer | Banking and Finance"}
              detail={"Lectures in banking and finance."}
            />
            <Card
              icon={<IoSchool size={28} color="white" />}
              title={"HSO"}
              href={"https://www.hso.ch/"}
              subtitle={"Lecturer | Accounting, Finance & Business"}
              detail={"Lectures in accounting, finance and business."}
            />
            <Card
              icon={<IoSchool size={28} color="white" />}
              title={"UIBS"}
              href={"https://www.uibs.org/campuses/zurich/"}
              subtitle={"Professor | Finance & Financial Management"}
              detail={"Professor of finance and financial management."}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={"/teaching.png"}
              alt="teaching.png"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 45vw"
            />
          </div>
        </div>
      </SlideLeftRight>
    </div>
  );
}
