import React, { useEffect } from "react";
import "./css/Works.css";

import Netfliximg from "./img/netflixClone.png";
import LinkedInimg from "./img/linkedInClone.png";
import placeholder from "./img/placeholder.jpg";
import MediaCard from "./MediaCard";
import portfolioImg from "./img/portfolio.png";

function Works(props) {
  useEffect(() => {
    document.querySelector(".loader").classList.remove("loader--hide");
    document.querySelector(".load-cont").classList.remove("load-cont-hide");

    setTimeout(() => {
      document.querySelector(".loader").classList.add("loader--hide");
      document.querySelector(".load-cont").classList.add("load-cont-hide");
    }, 1000);
  }, []);
  const back = {
    linkedin: [
      "REDUX",
      "FIREBASE FIRESTORE",
      "FIREBASE AUTHENTICATION",
      "FIREBASE HOSTING",
      "MATERIAL UI",
    ],
    empty: ["Coming Soon..."],
    netflix: [
      "React",
      "Firebase Hosting",
      "Firebase Firestore",
      "TMDB API",
      "MATERIAL UI",
      "Responsive Design",
    ],
    portfolio: [
      "React",
      "Firebase Hosting",
      "Email.js",
      "MATERIAL UI",
      "Responsive Design",
      "Progressive ",
    ],
  };
  return (
    <div className={props.className} id="latest-work">
      <div className="works_container">
        <MediaCard
          image={Netfliximg}
          title="Netflix-Clone"
          info="The app displays films in categories and it is possible to watch trailer of choosen films."
          url="https://netflix-7f900.web.app/"
          back={back.netflix}
        />
        <MediaCard
          image={LinkedInimg}
          title="LinkedIn-Clone"
          info="The app has authentication and posting functions"
          url="https://linkedin-clone-6ee0e.web.app/"
          back={back.linkedin}
        />
        <MediaCard
          image={portfolioImg}
          title="Portfolio"
          info="Progressive Web App"
          url="https://firdavs.dev/"
          back={back.portfolio}
        />
        <MediaCard
          image={placeholder}
          title="New Project"
          info="Coming-soon..."
          url=""
          back={back.empty}
        />
      </div>
    </div>
  );
}

export default Works;
