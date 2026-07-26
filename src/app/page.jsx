import styles from "./page.module.scss";

import NavBar from "@/components/navbar/navbar";
import Landing from "@/components/landing/landing";
import Quote from "@/components/quote/quote";
import Skill from "@/components/skill/skill";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Certificate from "@/components/certificate/certificate";
import Teaching from "@/components/teaching/teaching";
import Education from "@/components/education/education";
import Publications from "@/components/publications/publications";
import PushTop from "@/components/pushTop/pushTop";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <Landing />
        <Quote />
        <Skill />
        <About />
        <Experience />
        <Certificate />
        <Teaching />
        <Education />
        <Publications />
      </main>
      <PushTop />
      <Contact />
    </div>
  );
}
