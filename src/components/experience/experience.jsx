"use client";

import Image from "next/legacy/image";
import styles from "./experience.module.scss";

import Card from "@/components/cards/cardExperience";
import { IoBriefcase } from "react-icons/io5";

import SlideLeftRight from "@/components/animations/slideLeftRight";

export default function Experience() {
  return (
    <div className={styles.experience} id="experience">
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
          <div className={styles.title}>E X P E R I E N C E</div>
          <div className={styles.content}>
            <Card
              icon={<IoBriefcase size={28} color="white" />}
              title={"Q WEALTH AG, Switzerland"}
              subtitle={"Partner & Executive Board Member"}
              detail={
                "Co-founded and built the firm with a focus on sustainable wealth management, securing FINMA licensing and ensuring regulatory compliance."
              }
            />
            <Card
              icon={<IoBriefcase size={28} color="white" />}
              title={"S&L Management and Consulting GmbH"}
              subtitle={" Insurance Broker"}
              detail={
                "Provided expert insurance brokerage services, risk assessment, and financial consulting to optimize client portfolios and ensure regulatory compliance."
              }
            />
            <Card
              icon={<IoBriefcase size={28} color="white" />}
              title={"Bank Julius Bär & Co. AG"}
              subtitle={"Managing Director Senior Advisor"}
              detail={
                "Provided strategic wealth management advice to high-net-worth clients, enhancing their portfolios with tailored investment strategies."
              }
            />
            <Card
              icon={<IoBriefcase size={28} color="white" />}
              title={"UBS International Life Ltd"}
              subtitle={"Head of Finance"}
              detail={
                "Oversaw financial operations, ensuring regulatory compliance and financial stability within the international life insurance"
              }
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={"/experience.jpeg"}
              alt="experience.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </SlideLeftRight>
    </div>
  );
}
