import React from "react";
import resume from "../../assets/resume.pdf"

function Contact(props) {
  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col-8 col-md-6 col-lg-5 col-xl-4">
          <div className="card mt-5">
            <article className="card-body about-me">
              <h1 className="card-title">Contact</h1>
              <hr />
              <div className="list-group">
                <a
                  href="mailto:jaredporter.dev@icloud.com"
                  className="list-group-item list-group-item-action"
                >
                  E-mail<i class="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/jaredp17"
                target="_blank" 
                rel="noopener noreferrer"
                className="list-group-item list-group-item-action">
                  GitHub<i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/jared-r-porter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="list-group-item list-group-item-action">
                  LinkedIn<i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href={resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="list-group-item list-group-item-action">
                  Resume<i class="fa fa-file-text" aria-hidden="true"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
