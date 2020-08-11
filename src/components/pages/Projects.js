import React from "react";
import projectInfo from "../../assets/js/project_info";

function Projects() {
  return (
    <main className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md">
          <div className="card mt-5">
            <article className="card-body">
              <h1 className="card-title">Projects</h1>
              <hr />

              <div className="row row-cols-1 row-cols-md-3 portfolio">
                {projectInfo.map((project) => (
                  <div className="col col-12 col-md-6 col-xl-4 mb-4">
                    <div className="card h-100">
                      <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title}
                      />
                      <div className="card-body proj-description">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                      </div>
                      <div className="card-body proj-links">
                        <a href={project.repo} className="card-link">
                          Repo
                        </a>
                        <a href={project.url} className="card-link">
                          Deployed Site
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
