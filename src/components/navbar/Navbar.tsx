import styles from "@/components/navbar/navbar.module.css";
import Links from "./links/Links";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <Links />
    </div>
  );
}
