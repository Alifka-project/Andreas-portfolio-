"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#teaching", label: "Teaching" },
  { href: "/#publications", label: "Publications" },
  { href: "/board-executive-advisory", label: "Board & Executive Advisory" },
  { href: "/#contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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
        <a className={styles.title} href="/">
          Dr. Andreas Svoboda
        </a>
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`${styles.guide} ${isOpen ? styles.open : ""}`}>
          <ol>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href ? styles.active : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
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
