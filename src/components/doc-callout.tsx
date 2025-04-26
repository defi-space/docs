import React from "react";
import styles from "./doc-styles.module.css";

// Icons
const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const DangerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

export const DocCallout = ({ children, type = "info", title }) => {
  // Define props based on type
  let typeProps = {
    className: styles.calloutInfo,
    icon: <InfoIcon />,
    defaultTitle: "Note",
  };

  switch (type) {
    case "warning":
      typeProps = {
        className: styles.calloutWarning,
        icon: <WarningIcon />,
        defaultTitle: "Warning",
      };
      break;
    case "success":
      typeProps = {
        className: styles.calloutSuccess,
        icon: <SuccessIcon />,
        defaultTitle: "Success",
      };
      break;
    case "danger":
      typeProps = {
        className: styles.calloutDanger,
        icon: <DangerIcon />,
        defaultTitle: "Important",
      };
      break;
    default:
      // Default is info
      break;
  }

  return (
    <div className={`${styles.callout} ${typeProps.className}`}>
      <div className={styles.calloutTitle}>
        {typeProps.icon}
        {title || typeProps.defaultTitle}
      </div>
      <div className={styles.calloutContent}>{children}</div>
    </div>
  );
};
