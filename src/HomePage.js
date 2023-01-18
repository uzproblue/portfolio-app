import React, { useEffect } from "react";
import "./css/HomePage.css";
import logo from "./img/10.png"; // with import
function HomePage(props) {
  useEffect(() => {
    document.querySelector(".loader").classList.remove("loader--hide");
    document.querySelector(".load-cont").classList.remove("load-cont-hide");

    setTimeout(() => {
      document.querySelector(".loader").classList.add("loader--hide");
      document.querySelector(".load-cont").classList.add("load-cont-hide");
    }, 1000);
  }, []);

  return (
    <div id="about" className={props.className}>
      <h1 className="title-1">#About</h1>
      <div className="color-1">
        <div className="text_wrapper">
          <h5>Hello 👋</h5>
          <h1>I'm Firdavs</h1>
          <h4>
            Front-end Designer <br /> & Developer
          </h4>
        </div>
      </div>
      <div className="color-2">{<img src={logo} alt="logo" />}</div>
    </div>
  );
}

export default HomePage;
