import React from "react";
import "./Privacy.css";
import Header from "../Header/page";

export default function page() {
  return (
    <>
      <Header />
      <div className="parent-privacy">
        <div className="privacy-headings">
          <p>
            <span className="dot">Home</span> &gt; Privacy Policy
          </p>
          <p>
            Privacy & Other policies<span className="dot">.</span>
          </p>
          <p>
            At <span className="dot">SKY FIANCIAL</span>, we are committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy outlines how we collect, use, and
            safeguard your data when you visit our website or interact with our
            services.
          </p>
        </div>
        <div className="privacy-grid">
          <div className="overall-privacy-border">
            <div className="privacy-border">
              <p>Information Collection</p>
              <p>
                We collect personal information such as name, contact details,
                and demographic data when you voluntarily provide it to us.
                Additionally, we may automatically collect certain information
                through cookies and similar technologies to enhance your
                browsing experience.
              </p>
            </div>
            <div className="privacy-border">
              <p>Data Security</p>
              <p>
                We employ industry-standard security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction. However, no method of transmission
                over the internet or electronic storage is completely secure,
                and we cannot guarantee absolute security.
              </p>
            </div>
            <div className="privacy-border">
              <p>Your Rights</p>
              <p>
                You have the right to access, correct, or delete your personal
                information held by us. You may also opt out of receiving
                marketing communications from us at any time.
              </p>
            </div>
          </div>
          <div className="overall-terms-border">
            <div className="privacy-border">
              <p>Use of Information</p>
              <p>
                We use the information we collect to provide you with the
                products and services you request, personalize your experience,
                and communicate with you about relevant offers and updates. Your
                data may also be used for internal purposes such as analytics
                and improving our services.
              </p>
            </div>
            <div className="privacy-border">
              <p>Third-Party Disclosure</p>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties without your consent, except as
                required by law or to trusted third parties who assist us in
                operating our website or servicing you.
              </p>
            </div>
            <div className="privacy-border">
              <p>Policy Updates</p>
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. We encourage you
                to review this page regularly for any updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
