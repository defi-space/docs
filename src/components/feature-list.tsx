import React from "react";
import styles from "./doc-styles.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

export const FeatureList = ({ features }) => {
  return (
    <div className={styles.featureList}>
      {features.map((feature, index) => (
        <div key={index} className={styles.feature}>
          {feature.link ? (
            <Link to={feature.link} className={styles.featureLink}>
              {feature.icon && (
                <span className={styles.featureIcon}>{feature.icon}</span>
              )}
              <Heading as="h3" className={styles.featureTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
            </Link>
          ) : (
            <>
              {feature.icon && (
                <span className={styles.featureIcon}>{feature.icon}</span>
              )}
              <Heading as="h3" className={styles.featureTitle}>
                {feature.title}
              </Heading>
              <p className={styles.featureDescription}>{feature.description}</p>
            </>
          )}
          <br></br>
        </div>
      ))}
    </div>
  );
};
