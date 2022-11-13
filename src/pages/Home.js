import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is John</h2>
        <div className="prompt">
          <p>I am a .NET (C-Sharp) backend software engineer with experience in building scalable and elegant applications that are optimized to meet the requirements and acceptance criteria.</p>
          <a href="https://www.linkedin.com/in/johnatoyebi/"><LinkedInIcon /></a>
          <a href="https://github.com/JohnAtoyebi"><GithubIcon /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
