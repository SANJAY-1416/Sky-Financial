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
  const [show, setShow] = useState(false);

  const validateForm = () => {
    return (
      name !== "" &&
      subject !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== ""
    );
  };

  const sendMail = () => {
    axios.post("http://localhost:4001/", {
      name,
      subject,
      email,
      phone,
      message,
    });
    if (validateForm()) {
      setShow(true);
      setName("");
      setSubject("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Please fill out all fields before submitting.");
    }
    // .then(() => {
    //   console.log("success");
    //   setShow(true);
    // })
    // .catch(() => {
    //   console.log("failure");
    // });
  };

  return (
    <>
      <div className="form">
        <div className="sub-form">
          <div className="overall-form">
            <div className="input-gap">
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="Subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-gap">
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="E-mail"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="Phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input"
                    required
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
                required
              />
            </div>
          </div>
          {show ? (
            <div className="email-successfully" onClose={() => setShow(false)}>
              Email has been sent successfully
            </div>
          ) : (
            ""
          )}
          <div className="form-touch">
            <button onClick={sendMail} type="submit" className="button">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
