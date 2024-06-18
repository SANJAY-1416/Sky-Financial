import React from "react";
import "./header.css";

export default function page() {
  return (
    <>
      <div className="top-header">
        <div className="sub-header">
          <div className="header">
            <div className="header-image">
              <img
                src="/Images/Logo.svg"
                width="190px"
                height="40px"
                alt="headerlogo"
              />
            </div>
            <div className="header-pages">
              <p>Home</p>
              <p>About us</p>
              <p>FAQ</p>
            </div>
            <div className="header-button">
              <button>Get in touch</button>
            </div>
          </div>
          <div className="header-line"></div>
        </div>
      </div>
    </>
  );
}
