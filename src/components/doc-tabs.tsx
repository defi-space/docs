import React, { useState, ReactNode, ReactElement } from "react";
import styles from "./doc-styles.module.css";

interface TabProps {
  children: ReactNode;
  title: string;
}

interface DocTabsProps {
  children: ReactNode;
}

export const DocTabs = ({ children }: DocTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  // Filter out only Tab components from children
  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabProps> =>
      React.isValidElement(child) && child.type === Tab,
  );

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel}>{tabs[activeTab]}</div>
    </div>
  );
};

export const Tab = ({ children, title }: TabProps) => {
  return <div>{children}</div>;
};
