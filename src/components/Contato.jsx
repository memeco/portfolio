// components/Contato.js

import React from "react";

function Contato() {
  return (
    <section id="contato" className="py-5">
      <div className="container">
        <h2>Contato</h2>

        <p>
          Envie um e-mail para
          <a
            title="emerson.pedro@alumni.usp.br"
            href="mailto:emerson.pedro@alumni.usp.br"
          >
            &nbsp;emerson.pedro@alumni.usp.br
          </a>{" "}
        </p>
      </div>
    </section>
  );
}

export default Contato;
