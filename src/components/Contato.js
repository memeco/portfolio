// components/Contato.js

import React from "react";

function Contato() {
  return (
    <section id="contato" className="py-5">
      <div className="container">
        <h2>Contato</h2>

        <p>
          Envie um e-mail para{" "}
          <a href="mailto:emerson.pedro@alumni.usp.br">
            emerson.pedro@alumni.usp.br
          </a>{" "}
          ou escreva aqui:
        </p>

        <form action="#" method="post">
          <input type="text" placeholder="Nome" required />
          &nbsp;
          <input type="email" placeholder="E-mail" required />
          <br />
          <br />
          <textarea
            placeholder="Digite sua mensagem"
            id="msg"
            required
          ></textarea>
          <br />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </section>
  );
}

export default Contato;
