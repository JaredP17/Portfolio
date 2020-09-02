import React from "react";
import headshot from "../../assets/images/auburn_headshot.jpg";

function About() {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="card mt-5">
            <article className="card-body about-me">
              <h1 className="card-title">About Me</h1>
              <hr />
              <div>
                <img src={headshot} alt="My Headshot" />
              </div>
              <p className="card-text about-me">
                Hi, my name is Jared! I am a full-stack software developer from
                Atlanta, GA. With a background in Computer Science, I am adept
                in OOP principles and committed to writing clean, reusable code.
                Known amongst my peers for strong attention to
                detail/responsiveness and a grit to resolve complex coding
                challenges in both individual and team environments. Currently looking for an entry-level position.
              </p>
              <p className="card-text about-me">
                In my spare time, I like going to the lake lake and working on
                DIY projects (home and/or tech). Please checkout my projects and
                contact pages for more information!
              </p>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
