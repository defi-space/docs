import React from "react";
import styles from "./doc-styles.module.css";

export const InlineBadge = ({ children, type = "primary" }) => {
  let typeClass = styles.badgePrimary;

  switch (type) {
    case "success":
      typeClass = styles.badgeSuccess;
      break;
    case "warning":
      typeClass = styles.badgeWarning;
      break;
    case "danger":
      typeClass = styles.badgeDanger;
      break;
    default:
      // Default is primary
      break;
  }

  return <span className={`${styles.badge} ${typeClass}`}>{children}</span>;
};
