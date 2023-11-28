// App.js

import React from "react";
import "./style.css"; // Importe seu arquivo style.css aqui
import Sobre from "./components/Sobre";
import RedesSociais from "./components/RedesSociais";
import Portfolio from "./components/Portfolio";
import Contato from "./components/Contato";
import Skills from "./components/Skills";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <header>
        <div className="container">
          <h1>Meu portfólio</h1>
        </div>
      </header>

      <nav className="container navbar navbar-expand-lg navbar-light bg-light">
        {
          <div className="container mx-auto text-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#sobre"
                    title="Sobre"
                    alt="Sobre"
                  >
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#skills"
                    title="Skills"
                    alt="Skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#redes"
                    title="Redes Sociais"
                    alt="Redes Sociais"
                  >
                    Redes Sociais
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#portfolio"
                    title="Meu portfólio"
                    alt="Meu portfólio"
                  >
                    Meu portfólio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contato" title="Contato">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
      </nav>

      <Sobre />
      <Skills />
      <RedesSociais />
      <Portfolio />
      <Contato />

      <footer id="footer">
        <div className="container">Meu portfólio &copy; 2023</div>
      </footer>
    </div>
  );
}

export default App;
