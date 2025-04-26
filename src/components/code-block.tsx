import React from "react";
import styles from "./doc-styles.module.css";

export const CodeBlock = ({ children, language = "javascript", title }) => {
  const containerStyle = {
    margin: "24px 0",
    borderRadius: "0px",
    overflow: "hidden",
    backgroundColor: "rgb(40, 44, 52)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const titleStyle = {
    padding: "8px 16px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "#EFEFEF",
    fontFamily: "monospace",
    fontSize: "0.9rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <div style={containerStyle}>
      {title && <div style={titleStyle}>{title}</div>}
      <pre style={{ margin: 0, padding: 0 }}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
};
