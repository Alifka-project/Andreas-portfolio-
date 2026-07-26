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
              title={"SBS Swiss Business School"}
              subtitle={"Lecturer & Professor"}
              detail={
                "Educates students in finance, banking, and global markets, integrating real-world experience into academic curricula."
              }
            />
            <Card
              icon={<IoSchool size={28} color="white" />}
              title={"Swiss Distance University of Applied Sciences (FFHS)"}
              subtitle={"Head of Finance and Leadership, Banking and Finance"}
              detail={
                "Leads academic programs, mentors students, and conducts research in financial risk management and investment decision"
              }
            />
            <Card
              icon={<IoSchool size={28} color="white" />}
              title={"Vision Goal GmbH"}
              subtitle={"Founder & Lecturer"}
              detail={
                "Provides high-quality education and mentoring for finance professionals through specialized workshops on financial planning and wealth management."
              }
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
