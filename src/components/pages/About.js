import React from "react";
import headshot from "../../assets/images/auburn_headshot.jpg";

function About() {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card mt-5">
            <article className="card-body about-me">
              <h1 className="card-title">About Me</h1>
              <hr />
              <div>
                <img src={headshot} alt="My Headshot" />
              </div>
              <p className="card-text about-me">
                I am from Atlanta, GA and recently graduated from Auburn
                University with a degree in Computer Science. I am ready to dive into
                the world of software development (Full Stack)! I like spending my
                free time at the lake and working on DIY projects (home and/or tech). Please
                checkout my projects and contact pages for more information!
              </p>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
