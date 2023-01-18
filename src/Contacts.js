import React, { useEffect, useState } from "react";
import "./css/Contacts.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import emailjs from "emailjs-com";

function Contacts(props) {
  useEffect(() => {
    document.querySelector(".loader").classList.remove("loader--hide");
    document.querySelector(".load-cont").classList.remove("load-cont-hide");

    setTimeout(() => {
      document.querySelector(".loader").classList.add("loader--hide");
      document.querySelector(".load-cont").classList.add("load-cont-hide");
    }, 1000);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      emailjs
        .sendForm(
          "service_y0c7t4t",
          "template_iaqryqb",
          e.target,
          "user_x6MzTBwrY756TJLfdo6MG"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Form is empty! Please, fill all the inputs.");
    }
  }

  return (
    <div className={props.className} id="contacts">
      <div className="contacts_container">
        <div className="social_links">
          <h2>Contact me @</h2>
          <div className="links_wrapper">
            <a
              href="https://www.instagram.com/this.bo/"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <InstagramIcon className="social__icon" />
              </span>
              <span>@this.bo</span>
            </a>

            <a
              href="mailto:contact@firdavs.dev"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <MailOutlineIcon className="social__icon" />
              </span>
              contact@firdavs.dev
            </a>

            <a
              href="https://www.linkedin.com/in/firdavs-rakhmonov-a47415197/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <LinkedInIcon className="social__icon" />
              </span>
              firdavs-rakhmonov-a47415197
            </a>

            <a
              href="https://github.com/uzproblue"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <GitHubIcon className="social__icon" />
              </span>
              uzproblue
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <h1>Get in Touch</h1>
          <h4>Feel free to drop me a line below!</h4>
          <label htmlFor="user_name">Name</label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="user_email">Email</label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="user_message">Message</label>
          <textarea
            name="user_message"
            id="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
