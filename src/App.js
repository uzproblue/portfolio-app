import "./css/App.css";

import React, { useState, useEffect } from "react";

import HomePage from "./HomePage";
import About from "./About";
import Works from "./Works";
import Nav from "./Nav";
import Contacts from "./Contacts";

function App() {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState("About");
  useEffect(() => {
    document.querySelector(".loader").classList.remove("loader--hide");
    document.querySelector(".load-cont").classList.remove("load-cont-hide");

    setTimeout(() => {
      document.querySelector(".loader").classList.add("loader--hide");
      document.querySelector(".load-cont").classList.add("load-cont-hide");
    }, 250);
  }, []);
  return (
    <div className="App">
      <Nav show={show} setShow={setShow} setPage={setPage} />
      {page === "About" ? (
        <HomePage className={`main_wrapper ${show ? "is_open" : null}`} />
      ) : null}
      {page === "Tools" ? <About className={show ? "is_open" : null} /> : null}

      {page === "Works" ? (
        <Works className={`${show ? "is_open" : null}`} />
      ) : null}
      {page === "Contacts" ? (
        <Contacts className={`${show ? "is_open" : null}`} />
      ) : null}
    </div>
  );
}

export default App;
