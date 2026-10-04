import styles from "./advisoryTeaser.module.scss";

export default function AdvisoryTeaser() {
  return (
    <section className={styles.teaser} aria-labelledby="advisory-teaser-title">
      <div className={styles.container}>
        <p className={styles.kicker}>Board &amp; Executive Advisory</p>
        <h2 id="advisory-teaser-title">
          Selected mandates for boards, owners and leadership teams
        </h2>
        <p className={styles.text}>
          Available for board advisory, interim executive and CFO/COO mandates
          in regulated financial services, in Switzerland and internationally.
        </p>
        <a className={styles.link} href="/board-executive-advisory">
          Board &amp; Executive Advisory
        </a>
      </div>
    </section>
  );
}
