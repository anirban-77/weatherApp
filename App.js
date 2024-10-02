import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          
        </a>{""}
        Create by: Mr.Anirban Chowdhury
        <a target="_blank" href="">
          
        </a>{""}
        | Connect: anirbanchowdhury12159@gmail.com
        <a target="_blank" href="">
          
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
