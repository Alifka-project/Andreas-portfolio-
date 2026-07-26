"use client";

import { useState } from "react";
import styles from "./navbar.module.scss";
import { Menu, X, Globe } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [currentLanguage, setCurrentLanguage] = useState("en");

  // const languages = [
  //   { code: "en", name: "English" },
  //   { code: "de", name: "Deutsch" },
  // ];

  // const handleLanguageChange = (langCode) => {
  //   setCurrentLanguage(langCode);
  //   // You would typically implement language change logic here
  //   // For example, updating app-wide translations or sending to a context
  //   console.log(`Language changed to: ${langCode}`);
  // };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a className={styles.title} href="#home">
          Dr. Andreas Svoboda
        </a>
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`${styles.guide} ${isOpen ? styles.open : ""}`}>
          <ol>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>
            <a href="#certifications" onClick={() => setIsOpen(false)}>
              Certifications
            </a>
            <a href="#teaching" onClick={() => setIsOpen(false)}>
              Teaching
            </a>
            <a href="#publications" onClick={() => setIsOpen(false)}>
              Publications
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </ol>
          {/* <div className={styles.languageSelector}>
            <button
              className={styles.languageToggle}
              onClick={() =>
                handleLanguageChange(currentLanguage === "en" ? "de" : "en")
              }
            >
              <Globe size={20} />
              <span>{currentLanguage.toUpperCase()}</span>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
