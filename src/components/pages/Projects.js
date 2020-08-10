import React from "react";

function Projects() {
  return (
    <main className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-xl-9">
          <div className="card mt-5">
            <article className="card-body">
              <h1 className="card-title">Portfolio</h1>
              <hr />

              <div className="row row-cols-1 row-cols-md-3 portfolio">
                <div className="col col-12 col-md-6 col-xl-4 mb-4">
                  <div className="card h-100">
                    <img src="" className="card-img-top" alt="Remote Island" />
                    <div className="card-body proj-description">
                      <h5 className="card-title">Remote Island</h5>
                      <p className="card-text">
                        This project was created to provide a solution to
                        everyone's want to escape (from reality)! We created a
                        website where the user can decide what type of vacation
                        they want to take and be transported to a page with
                        videos (some live) of their desired getaway.
                      </p>
                    </div>
                    <div className="card-body proj-links">
                      <a
                        href="https://github.com/JaredP17/gt-project-1"
                        className="card-link"
                      >
                        Repo
                      </a>
                      <a
                        href="https://jaredp17.github.io/gt-project-1/"
                        className="card-link"
                      >
                        Deployed Site
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col col-12 col-md-6 col-xl-4 mb-4">
                  <div className="card h-100">
                    <img src="" className="card-img-top" alt="Memory Maker" />
                    <div className="card-body proj-description">
                      <h5 className="card-title">Memory Maker</h5>
                      <p className="card-text">
                        Memory Maker is a full-stack web application created
                        with the MVC paradigm. Memory Maker uses node.js with an
                        express.js server, a mySQL database, a sequelize ORM,
                        and handlebars.js as a view engine. The app features an
                        interactive UI and responsive design.
                      </p>
                    </div>
                    <div className="card-body proj-links">
                      <a
                        href="https://github.com/JaredP17/Memory-Maker"
                        className="card-link"
                      >
                        Repo
                      </a>
                      <a
                        href="https://memory-maker.herokuapp.com/"
                        className="card-link"
                      >
                        Deployed Site
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col col-12 col-md-6 col-xl-4 mb-4">
                  <div className="card h-100">
                    <img
                      src=""
                      className="card-img-top"
                      alt="Password Generator"
                    />
                    <div className="card-body proj-description">
                      <h5 className="card-title">Password Generator</h5>
                      <p className="card-text">
                        An application that generates a random password based on
                        user selected criteria. This app features dynamically
                        updated HTML/CSS powered by JavaScript and
                        includes a clean and polished UI and is
                        responsive.
                      </p>
                    </div>
                    <div className="card-body proj-links">
                      <a
                        href="https://github.com/JaredP17/PasswordGenerator"
                        className="card-link"
                      >
                        Repo
                      </a>
                      <a
                        href="https://jaredp17.github.io/PasswordGenerator/"
                        className="card-link"
                      >
                        Deployed Site
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col col-12 col-md-6 col-xl-4 mb-4">
                  <div className="card h-100">
                    <img
                      src=""
                      className="card-img-top"
                      alt="Weather Dashboard"
                    />
                    <div className="card-body proj-description">
                      <h5 className="card-title">Weather Dashboard</h5>
                      <p className="card-text">
                        A weather dashboard that features dynamically updated
                        HTML and CSS and uses the OpenWeather API to retrieve
                        weather data for cities. Type in a city and see the
                        current and 5-Day forecasts. City searches are
                        persistent.
                      </p>
                    </div>
                    <div className="card-body proj-links">
                      <a
                        href="https://github.com/JaredP17/gt-hw6-weather-dashboard"
                        className="card-link"
                      >
                        Repo
                      </a>
                      <a
                        href="https://jaredp17.github.io/gt-hw6-weather-dashboard/"
                        className="card-link"
                      >
                        Deployed Site
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col col-12 col-md-6 col-xl-4 mb-4">
                  <div className="card h-100">
                    <img
                      src=""
                      className="card-img-top"
                      alt="Note Taker"
                    />
                    <div className="card-body proj-description">
                      <h5 className="card-title">Note Taker</h5>
                      <p className="card-text">
                        An application that can be used to write, save, and
                        delete notes. This application uses an express backend
                        and saves/retrieves note data to/from a JSON file.
                      </p>
                    </div>
                    <div className="card-body">
                      <a
                        href="https://github.com/JaredP17/gt-hw-note-taker"
                        className="card-link"
                      >
                        Repo
                      </a>
                      <a
                        href="https://gt-hw-note-taker-jrp.herokuapp.com/"
                        className="card-link"
                      >
                        Deployed Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
