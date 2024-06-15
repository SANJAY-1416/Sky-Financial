import React from "react";
import "./Footer.css";
import Link from "next/link";

export default function page() {
  return (
    <div className="footer-parent">
      <div className="footer">
        <div>
          <img src="/Images/logo.svg" />
        </div>
        <div className="code"></div>
        <div className="footer-center">
          <p>
            Welcome to <span className="dot">SKY FINANCIAL</span>, where we
            prioritize protecting your future above all else. Our About Us
            section offers a glimpse into who we are, our values, and why we're
            dedicated to ensuring your peace of mind. Meet our experienced team,
            learn about our history, and discover how our personalized approach
            to life insurance can safeguard your loved ones' financial security.
            At [Agency Name], we're here to guide you toward a future of
            confidence and security.
          </p>
        </div>
        <div className="code"></div>
        <div className="image-row ">
          <div className="image-number">
            <img src="/Images/call.svg" />
            <p>586-907-8700</p>
          </div>
          <div className="image-number">
            <img src="/Images/gmail.svg" />
            <p>sam@sky.financial</p>
          </div>
          <div className="image-number">
            <img src="/Images/map-pin.svg" />
            <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="sub-footer-rights">
          <p>© 2024 SKY FINANCIAL, New York, NY. All Rights Reserved.</p>
        </div>
        <div className="sub-footer-terms">
          <Link href="/Component/Terms">Terms of use</Link>
          <Link href="/Component/Privacy">Privacy & Other policies</Link>
        </div>
      </div>
    </div>
  );
}
