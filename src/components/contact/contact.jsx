"use client";

import styles from "./contact.module.scss";
import { IoMail, IoCall, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { Resend } from "resend";
import { toast } from "react-toastify";

import Card from "./card";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const postForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !phone || !subject || !message) {
      toast.error("Please complete the form", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Success Toast Notification
      toast.success("Form sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Clear all fields after success
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error) {
      // Error Toast Notification
      toast.error("Something's wrong!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name == "subject") {
      setSubject(e.target.value);
    }
    if (e.target.name == "message") {
      setMessage(e.target.value);
    }
  };
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.title}>Get in Touch</div>
        <div className={styles.list}>
          <div className={styles.cards}>
            <Card icon={<IoMail size={24} />} text={"svoboda@slmc.ch"} />
            <Card icon={<IoCall size={24} />} text={"+41787280933"} />
            <Card
              icon={<IoLogoLinkedin size={24} />}
              text={"linkedin.com/in/andreas-svoboda"}
              link={"https://www.linkedin.com/in/andreas-svoboda"}
            />
            <Card
              icon={<IoLogoYoutube size={24} />}
              text={"youtube.com/@SvobodaFinance"}
              link={"https://youtube.com/@SvobodaFinance"}
            />
          </div>
          <div className={styles.form}>
            <div className={styles.input}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => handleInputChange(e)}
                value={name}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => handleInputChange(e)}
                value={email}
                autoComplete="off"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                onChange={(e) => handleInputChange(e)}
                value={phone}
                autoComplete="off"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                onChange={(e) => handleInputChange(e)}
                value={subject}
                autoComplete="off"
              />
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                onChange={(e) => handleInputChange(e)}
                value={message}
                autoComplete="off"
              />
            </div>
            <button onClick={postForm}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
