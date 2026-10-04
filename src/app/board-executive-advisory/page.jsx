import NavBar from "@/components/navbar/navbar";
import PushTop from "@/components/pushTop/pushTop";
import pageStyles from "../page.module.scss";
import styles from "./advisory.module.scss";

const canonical = "https://www.andreassvoboda.com/board-executive-advisory";

const supportAreas = [
  {
    title: "Board and strategic advisory",
    text: "Independent counsel for boards and owners where strategy, oversight and decisions need to hold together.",
  },
  {
    title: "Interim executive leadership",
    text: "Time-bound senior leadership when a regulated business needs experienced capacity.",
  },
  {
    title: "CFO and COO mandates",
    text: "Finance and operations leadership across control, reporting and delivery.",
  },
  {
    title: "Governance, finance and risk oversight",
    text: "Support where governance, financial discipline and risk oversight meet.",
  },
  {
    title: "Business and operational transformation",
    text: "Practical change in how a financial-services organisation is run.",
  },
  {
    title: "Financial-services propositions and operating models",
    text: "Shaping client propositions and the operating model that supports them.",
  },
];

const sectors = [
  "Banking and private banking",
  "Wealth and asset management",
  "Insurance and pensions",
  "Financial planning",
  "Regulated financial services",
];

const profiles = [
  {
    label: "FFHS profile",
    href: "https://www.ffhs.ch/de/ffhs/personen/person/svoboda-andreas",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=FHXZ2ZEAAAAJ",
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Andreas-Svoboda-2",
  },
  {
    label: "Julius Baer – Great wealth handover calls for expert solutions",
    href: "https://www.juliusbaer.com/en/business-navigator/business-navigator/business-strategy/great-wealth-handover-calls-for-expert-solutions/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andreas-svoboda/",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.andreassvoboda.com/#andreas-svoboda",
      name: "Andreas Svoboda",
      jobTitle: "Financial Services Executive & Board Advisor",
      url: canonical,
      sameAs: [
        "https://www.linkedin.com/in/andreas-svoboda/",
        "https://scholar.google.com/citations?hl=en&user=FHXZ2ZEAAAAJ",
        "https://www.researchgate.net/profile/Andreas-Svoboda-2",
        "https://www.ffhs.ch/de/ffhs/personen/person/svoboda-andreas",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${canonical}#service`,
      name: "Board & Executive Advisory",
      url: canonical,
      description:
        "Board advisory, interim executive leadership and CFO/COO mandates for regulated financial services in Switzerland and internationally.",
      areaServed: ["Switzerland", "International"],
      provider: {
        "@id": "https://www.andreassvoboda.com/#andreas-svoboda",
      },
      serviceType: supportAreas.map((item) => item.title),
    },
  ],
};

export const metadata = {
  title:
    "Andreas Svoboda | Financial Services Executive & Board Advisor Switzerland",
  description:
    "Swiss financial-services executive and board advisor with 30+ years of experience across banking, insurance, wealth management, pensions, governance, finance and transformation.",
  alternates: {
    canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Andreas Svoboda | Financial Services Executive & Board Advisor Switzerland",
    description:
      "Swiss financial-services executive and board advisor with 30+ years of experience across banking, insurance, wealth management, pensions, governance, finance and transformation.",
    url: canonical,
    type: "website",
  },
};

export default function BoardExecutiveAdvisoryPage() {
  return (
    <div className={pageStyles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NavBar />
      <main className={styles.page} id="top">
        <header className={styles.hero}>
          <div className={styles.wrap}>
            <p className={styles.kicker}>Board &amp; Executive Advisory</p>
            <h1>Financial Services Executive &amp; Board Advisor</h1>
            <p className={styles.lead}>
              I advise boards, owners and leadership teams in regulated
              financial services where strategy, finance, governance, risk and
              execution meet. Drawing on more than 30 years of experience
              across banking, insurance, wealth and asset management and
              pensions, I am available for selected board advisory, interim
              executive and CFO/COO mandates in Switzerland and
              internationally.
            </p>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="support-heading">
          <div className={styles.wrap}>
            <h2 id="support-heading">How I can support</h2>
            <div className={styles.grid}>
              {supportAreas.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.alt}`}
          aria-labelledby="sector-heading"
        >
          <div className={styles.wrap}>
            <h2 id="sector-heading">Sector focus</h2>
            <ul className={styles.sectors}>
              {sectors.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
            <a className={styles.button} href="/#experience">
              View professional experience
            </a>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="profile-heading">
          <div className={styles.wrap}>
            <h2 id="profile-heading">Existing profile information</h2>
            <p className={styles.copy}>
              Qualifications, certifications, publications and research are
              already presented on the main site.
            </p>
            <div className={styles.actions}>
              <a className={styles.buttonGhost} href="/#certifications">
                View qualifications and certifications
              </a>
              <a className={styles.buttonGhost} href="/#publications">
                View publications and research
              </a>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.alt}`}
          aria-labelledby="external-heading"
        >
          <div className={styles.wrap}>
            <h2 id="external-heading">External Profiles &amp; Publications</h2>
            <ul className={styles.links}>
              {profiles.map((profile) => (
                <li key={profile.href}>
                  <a href={profile.href} target="_blank" rel="noopener noreferrer">
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="mandate-heading">
          <div className={styles.wrap}>
            <h2 id="mandate-heading">
              Discuss a board, advisory or executive mandate
            </h2>
            <a className={styles.button} href="/#contact">
              Discuss a board, advisory or executive mandate
            </a>
          </div>
        </section>
      </main>
      <PushTop href="#top" />
    </div>
  );
}
