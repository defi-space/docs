import React from "react";
import styles from "./doc-styles.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

// Arrow icon for links
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const DocCard = ({
  title,
  icon,
  children,
  linkUrl,
  linkText = "Learn More",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Heading as="h3" className={styles.cardTitle}>
          {icon && <span className={styles.cardIcon}>{icon}</span>}
          {title}
        </Heading>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardContentText}>{children}</div>

        {linkUrl && (
          <Link to={linkUrl} className={styles.cardLink}>
            {linkText}
            <ArrowIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export const DocCardGrid = ({ children }) => {
  return <div className={styles.cardGrid}>{children}</div>;
};
