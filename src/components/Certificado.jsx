import React from "react";

function Certificado() {
  return (
    <section
      id="certificado"
      className="py-5"
      style={{ backgroundColor: "#CCCCCC" }}
    >
      <div className="container">
        <h2>Certificados</h2>

        <p>Aqui você encontra meus certificados e qualificações.</p>

        <ul className="certificados">
          <li>
            <p>
              <a
                href="https://www.credly.com/badges/b012a013-6920-427c-8107-68b36145cfd0/linked_in_profile"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                2023 - Certificado Profissional de Análise de Dados do Google.
              </a>
            </p>
          </li>
          <li>
            <a
              href="https://imgur.com/Xm4B7PC"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              <p>
                2023 - Bootcamp para desenvolvedor Front-End com React e
                Bootstrap PcD da SoulCode.
              </p>
            </a>
          </li>
          <li>
            <p>
              <a
                href="https://imgur.com/a/dP0EpX6"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                2024 - Meu inglês - B1/B2 Upper Intermediate por EFSet.
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certificado;
