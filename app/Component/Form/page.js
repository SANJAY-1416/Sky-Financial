"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { useState } from "react";
import axios from "axios";
import "./Form.css";

export default function page() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    axios
      .post("http://localhost:4001/", {
        name,
        subject,
        email,
        phone,
        message,
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <div className="form">
      <div className="sub-form">
        <div className="overall-form">
          <div className="input-gap">
            <div className="input-form">
              <div>
                <img src="/Images/user.svg" />
              </div>
              <div className="line"></div>
              <div className="inputGroup">
                <input
                  placeholder="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="input-form">
              <div>
                <img src="/Images/user.svg" />
              </div>
              <div className="line"></div>
              <div className="inputGroup">
                <input
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="input-gap">
            <div className="input-form">
              <div>
                <img src="/Images/user.svg" />
              </div>
              <div className="line"></div>
              <div className="inputGroup">
                <input
                  placeholder="Enter your email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="input-form">
              <div>
                <img src="/Images/user.svg" />
              </div>
              <div className="line"></div>
              <div className="inputGroup">
                <input
                  placeholder="Enter your phone number"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="input-form-message">
          <div className="inputGroup">
            <textarea
              placeholder="Message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input"
            />
          </div>
        </div>
        <div className="form-touch">
          <button onClick={sendMail} type="submit" className="button">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
