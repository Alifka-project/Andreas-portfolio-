import styles from "./cardExperience.module.scss";

export default function Card({ icon, title, subtitle, detail, href }) {
  const TitleTag = href ? "a" : "div";

  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.details}>
        <TitleTag
          className={styles.title}
          {...(href
            ? { href, target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {title}
        </TitleTag>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.detail}>{detail}</div>
      </div>
    </div>
  );
}
