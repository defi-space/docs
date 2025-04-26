import React, { useState, ReactNode, ReactElement } from "react";
import styles from "./doc-styles.module.css";

interface FAQChildProps {
  className?: string;
  children: ReactNode;
}

export default function FAQAccordion({ children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Extract question and answer from children
  const childrenArray = React.Children.toArray(children);
  const question = childrenArray.find(
    (child): child is ReactElement<FAQChildProps> =>
      React.isValidElement(child) &&
      (child.props as FAQChildProps)?.className === "faq-question",
  );
  const answer = childrenArray.find(
    (child): child is ReactElement<FAQChildProps> =>
      React.isValidElement(child) &&
      (child.props as FAQChildProps)?.className === "faq-answer",
  );

  if (!question || !answer) {
    console.error(
      "FAQAccordion requires children with className 'faq-question' and 'faq-answer'",
    );
    return null; // Or render an error state
  }

  return (
    <div className={`faq-card ${styles.faqAccordion}`}>
      <div
        className={`faq-question ${styles.faqQuestion}`}
        onClick={toggleAccordion}
      >
        {question.props.children}
        <span className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>
      <div
        className={`faq-answer ${styles.faqAnswer} ${isOpen ? styles.open : ""}`}
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        {answer.props.children}
      </div>
    </div>
  );
}
