import Image from "next/legacy/image";
import styles from "./cardCertificate.module.scss";

export default function Card({ image, year, title }) {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.image}>
          <Image src={image} alt="logo.png" layout="fill" objectFit="contain" />
        </div>
      )}
      <div className={styles.detail}>
        <div className={styles.year}>{year}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}
