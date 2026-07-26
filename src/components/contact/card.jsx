import styles from "./contact.module.scss";

export default function Card({ icon, text, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      {link ? (
        <a className={styles.text} href={link || "#"}>
          {text}
        </a>
      ) : (
        <p className={styles.text}>{text}</p>
      )}
    </div>
  );
}
