"use client";

import React, { useState } from "react";
import "./Accordian.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>
          {isOpen ? (
            <img src="/Images/Vector.svg" />
          ) : (
            <img src="/Images/Vectorone.svg" />
          )}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
