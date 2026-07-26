import styles from "./pushTop.module.scss";
import { IoArrowUp } from "react-icons/io5";

export default function PushTop() {
  return (
    <a className={styles.pushTop} href="#home">
      <IoArrowUp size={28} />
    </a>
  );
}
