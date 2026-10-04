import styles from "./pushTop.module.scss";
import { IoArrowUp } from "react-icons/io5";

export default function PushTop({ href = "#home" }) {
  return (
    <a className={styles.pushTop} href={href}>
      <IoArrowUp size={28} />
    </a>
  );
}
