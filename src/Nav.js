import "./css/Nav.css";
import logo from "./img/f_logo4.png";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useState } from "react";
function Nav(props) {
  const [open, setOpen] = useState("1");
  return (
    <div className={`nav `}>
      <div className="sidebar__cont">
        <a href="/">
          <img src={logo} alt="logo-img" />
        </a>

        <MenuRoundedIcon
          id="menu_icon"
          onClick={() => props.setShow(!props.show)}
        />

        <div className="sidebar_social">
          <a
            target="_blank"
            href="https://github.com/uzproblue"
            rel="noreferrer"
          >
            <GitHubIcon className="link_svg" />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/firdavs-rakhmonov-a47415197/"
            rel="noreferrer"
          >
            <LinkedInIcon className="link_svg" />
          </a>
        </div>
      </div>
      <div
        className="btn_container"
        style={{
          transform: +props.show ? "translateX(0px)" : "translateX(-400px)",
        }}
      >
        <div
          onClick={() => {
            props.setPage("About");
            props.setShow(!props.show);
            setOpen("1");
          }}
          className={`btn_cont ${open === "1" ? "open" : null}`}
        >
          About
        </div>
        <div
          onClick={() => {
            props.setPage("Tools");
            props.setShow(!props.show);
            setOpen("2");
          }}
          className={`btn_cont ${open === "2" ? "open" : null}`}
        >
          Tools
        </div>
        <div
          className={`btn_cont ${open === "3" ? "open" : null}`}
          onClick={() => {
            props.setPage("Works");
            props.setShow(!props.show);
            setOpen("3");
          }}
        >
          Latest Works
        </div>
        <div
          className={`btn_cont ${open === "4" ? "open" : null}`}
          onClick={() => {
            props.setPage("Contacts");
            props.setShow(!props.show);
            setOpen("4");
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
}

export default Nav;
