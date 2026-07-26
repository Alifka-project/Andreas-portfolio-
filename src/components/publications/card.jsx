import styles from "./publications.module.scss";

export default function Card({ title, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{desc}</div>
    </div>
  );
}
