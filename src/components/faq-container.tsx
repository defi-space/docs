import React from "react";
import FAQAccordion from "./faq-accordian";
import Heading from "@theme/Heading";

export function FAQSection({ title, children, icon }) {
  return (
    <div>
      <Heading as="h2">
        {icon} {title}
      </Heading>
      {children}
    </div>
  );
}

export function FAQItem({ question, children, defaultOpen = false }) {
  return (
    <FAQAccordion defaultOpen={defaultOpen}>
      <div className="faq-question">{question}</div>
      <div className="faq-answer">{children}</div>
    </FAQAccordion>
  );
}

export default function FAQContainer({ children }) {
  return <div className="faq-container">{children}</div>;
}
