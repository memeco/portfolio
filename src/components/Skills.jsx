// components/Sobre.js

import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2>Skills</h2>
        <br />
        <div className="row">
          <div className="col-md-6">
            <h3>Linguagens de Programação e Marcação</h3>
            <p>
              HTML 5:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  100%
                </div>
              </div>
            </p>
            <p>
              CSS 3:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  95%
                </div>
              </div>
            </p>
            <p>
              JavaScript:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </p>
            <p>
              React:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </p>
            <p>
              Wordpress:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  95%
                </div>
              </div>
            </p>
            <p>
              Python:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
            </p>
          </div>
          <div className="col-md-6">
            <h3>Línguas</h3>
            <p>
              Português:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Nativo
                </div>
              </div>
            </p>
            <p>
              Inglês:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "98%" }}
                  aria-valuenow="98"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Fluente
                </div>
              </div>
            </p>
            <p>
              Espanhol:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Avançado
                </div>{" "}
              </div>
            </p>
            <p>
              Francês:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Básico
                </div>{" "}
              </div>
            </p>
            <p>
              Italiano:
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Básico
                </div>{" "}
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
