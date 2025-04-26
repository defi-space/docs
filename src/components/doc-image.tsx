import React, { CSSProperties } from "react";
import styles from "./doc-styles.module.css";

export const DocImage = ({
  src,
  alt,
  caption,
  width,
  height,
  className = "",
}) => {
  const imageStyle = {
    width: width || "auto",
    height: height || "auto",
    maxWidth: "100%",
    borderRadius: "0px",
    display: "block",
    margin: "0 auto",
  };

  const containerStyle: CSSProperties = {
    margin: "32px 0",
    textAlign: "center",
  };

  const captionStyle: CSSProperties = {
    fontSize: "0.9rem",
    color: "#ABABAB",
    marginTop: "8px",
    textAlign: "center",
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle} className={className}>
      <img src={src} alt={alt} style={imageStyle} />
      {caption && <div style={captionStyle}>{caption}</div>}
    </div>
  );
};
