import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

export type linkTypes = {
  item: {
    title: string;
    path: string;
  };
};

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export default function Links() {
  const isSession: boolean = false;
  const isAdmin: boolean = false;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {isSession ? (
          <>
            <button>Logout</button>
            {!isAdmin && <NavLink item={{ title: "/admin", path: "/admin" }} />}
          </>
        ) : (
          <>
            <NavLink item={{ title: "login", path: "/" }} />
          </>
        )}
      </div>
    </div>
  );
}
