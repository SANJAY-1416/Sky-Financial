import React from "react";
import "./Terms.css";
import Header from "../Header/page";

export default function page() {
  return (
    <>
      <Header />
      <div className="parent-term">
        <div className="term-headings">
          <p>
            <span className="dot">Home</span> &gt; Terms and Conditions
          </p>
          <h3>
            Terms of use<span className="dot">.</span>
          </h3>
        </div>
        <div className="terms-grid">
          <div className="overall-terms-border">
            <div className="terms-border">
              <p>Acceptance of Terms</p>
              <p>
                By accessing this website, you agree to be bound by these terms
                and conditions of use.
              </p>
            </div>
            <div className="terms-border">
              <p>Use of Information</p>
              <p>
                The information provided on this website is for general
                informational purposes only and should not be construed as
                professional advice. We recommend consulting with a licensed
                insurance agent or financial advisor regarding specific
                insurance needs.
              </p>
            </div>
            <div className="terms-border">
              <p>Privacy Policy</p>
              <p>
                Your privacy is important to us. Please review our Privacy
                Policy to understand how we collect, use, and safeguard your
                personal information.
              </p>
            </div>
            <div className="terms-border">
              <p>Third-Party Links</p>
              <p>
                This website may contain links to third-party websites for your
                convenience. We do not endorse or control the content of these
                websites and are not responsible for any information or services
                provided by them.
              </p>
            </div>
          </div>
          <div className="overall-terms-border">
            <div className="terms-border">
              <p>Limitation of Liability</p>
              <p>
                We shall not be liable for any direct, indirect, incidental,
                special, or consequential damages arising out of or in any way
                connected with the use of this website.
              </p>
            </div>
            <div className="terms-border">
              <p>Accuracy of Information</p>
              <p>
                We strive to ensure the accuracy and timeliness of information
                presented on this website. However, we make no warranties or
                representations regarding the accuracy, completeness, or
                reliability of any information provided.
              </p>
            </div>
            <div className="terms-border">
              <p>Intellectual Property</p>
              <p>
                All content, logos, and trademarks displayed on this website are
                the property of their respective owners and may not be used
                without prior written permission.
              </p>
            </div>
            <div className="terms-border">
              <p>Changes to Terms</p>
              <p>
                We reserve the right to modify or update these terms and
                conditions at any time without prior notice. Your continued use
                of the website after such changes constitutes acceptance of the
                updated terms
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
