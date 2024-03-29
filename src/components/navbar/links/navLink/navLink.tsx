"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import { linkTypes } from "../Links";

const NavLink = ({ item: { path, title } }: linkTypes) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
