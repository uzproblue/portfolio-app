import React, { useEffect } from "react";
import "./css/About.css";
import { Paper } from "@material-ui/core";
import html5 from "./img/HTML5.png";
import css3 from "./img/css3.png";
import js from "./img/JavaScript.png";
import reactBrands from "./img/React.png";
import bootstrap from "./img/bootstrap.svg";
import photoshop from "./img/Photoshop.png";
import materialUi from "./img/materialUI.png";
import cSharp from "./img/C_Sharp.png";
import firebaseimg from "./img/firebase.png";
import CustomizedProgressBars from "./ToolProgress";

function About(props) {
  useEffect(() => {
    document.querySelector(".loader").classList.remove("loader--hide");
    document.querySelector(".load-cont").classList.remove("load-cont-hide");

    setTimeout(() => {
      document.querySelector(".loader").classList.add("loader--hide");
      document.querySelector(".load-cont").classList.add("load-cont-hide");
    }, 1000);
  }, []);

  const images = [
    { src: html5, name: "HTML5", value: 100 },
    { src: css3, name: "CSS3", value: 100 },
    { src: js, name: "JavaScript", value: 89 },
    { src: cSharp, name: "C#", value: 50 },
    { src: reactBrands, name: "React.js", value: 88 },
    {
      src: firebaseimg,
      name: "Firebase",
      value: 70,
    },
    { src: bootstrap, name: "BootStrap", value: 95 },
    {
      src: materialUi,
      name: "Material-UI",
      value: 85,
    },

    { src: photoshop, name: "Photoshop", value: 90 },
  ];
  return (
    <div className={props.className} id="tools">
      <h1 className="title-2">#Tools</h1>
      <div className="about_wrapper">
        <div className="about_sections_cont mob">
          {images.map((image, index) => {
            return (
              <>
                <CustomizedProgressBars
                  src={image.src}
                  name={image.name}
                  value={image.value}
                />
              </>
            );
          })}
        </div>
        <div className="about_sections_cont pc">
          {images.map((image, index) => {
            return (
              <Paper className="about_section" key={index}>
                <img src={image.src} key={index} alt="my_tools" />
                <h3 className="tool_name">{image.name}</h3>
              </Paper>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
