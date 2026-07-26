import styles from "./cardExperience.module.scss";

export default function Card({ icon, title, subtitle, detail }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.detail}>{detail}</div>
      </div>
    </div>
  );
}
