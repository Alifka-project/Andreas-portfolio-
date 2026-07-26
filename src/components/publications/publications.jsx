"use client";

import SlideBottomTop from "@/components/animations/SlideBottomTop";

import styles from "./publications.module.scss";

import Card from "./card";

export default function Publications() {
  return (
    <div className={styles.publication} id="publications">
      <SlideBottomTop
        className={styles.container}
        initial={{ opacity: 0, y: 100, scale: 0.95 }} // Starts from bottom with slight scale
        animateInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 0.77, 0.47, 0.97],
          delay: 0.1,
        }}
        viewportOptions={{
          once: false,
          amount: 0.03,
          margin: "0px 0px -100px 0px",
        }}
      >
        <div className={styles.title}>P U B L I C A T I O N S</div>
        <div className={styles.subtitle}>B O O K S</div>
        <div className={styles.divider} />
        <Card
          title={"Family Business Management"}
          desc={
            "A guide to mastering the complexities of running a family enterprise."
          }
        />
        <Card
          title={"Whispers of the Mind"}
          desc={
            "Exploring personal development and the psychology behind decision-making."
          }
        />
        <Card
          title={"The Psychology of Money"}
          desc={
            "Understanding the emotions behind financial decisions and how they impact financial success."
          }
        />
        <div className={styles.divider} />
        <a
          className={styles.seeMore}
          href="https://www.orellfuessli.ch/shop/home/mehr-von-suche/ANY/sp/suche.html?mehrVon=andreas+svoboda"
        >
          See More Books
        </a>
        <div className={styles.subtitle}>
          R E S E A R C H <br /> A R T I C L E S
        </div>
        <div className={styles.divider} />
        <Card
          title={"Building an ESG Investment Portfolio"}
          desc={"Building an ESG Investment Portfolio."}
        />
        <Card
          title={
            "The Impact of Artificial Intelligence on the Banking Industry"
          }
          desc={"Analyzing how AI is transforming financial services."}
        />
        <Card
          title={"The Democratization of Diversification:"}
          desc={
            "How Exchange-Traded Funds (ETFs) Are Transforming Investment Strategies."
          }
        />
        <div className={styles.divider} />
        <a
          className={styles.seeMore}
          href="https://scholar.google.com/citations?hl=de&user=FHXZ2ZEAAAAJ"
        >
          See More Articles
        </a>
      </SlideBottomTop>
    </div>
  );
}
