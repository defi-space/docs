import React from "react";
import styles from "./doc-styles.module.css";
import Heading from "@theme/Heading";

export const DocSteps = ({ children }) => {
  // Filter out only DocStep components from children
  const steps = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === DocStep,
  );

  return <div className={styles.steps}>{steps}</div>;
};

export const DocStep = ({ title, children }) => {
  return (
    <div className={styles.step}>
      {title && (
        <Heading as="h3" className={styles.stepTitle}>
          {title}
        </Heading>
      )}
      <div className={styles.stepContent}>{children}</div>
    </div>
  );
};
