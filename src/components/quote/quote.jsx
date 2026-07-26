import styles from "./quote.module.scss";

export default function Quote() {
  return (
    <div className={styles.quote} id="quote">
      <div className={styles.container}>
        <div className={styles.text}>
          "I empower clients and professionals alike through education,
          mentoring, and customized workshops in finance, planning, and wealth
          development."
        </div>
      </div>
    </div>
  );
}
