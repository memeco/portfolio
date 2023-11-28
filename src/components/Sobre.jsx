// components/Sobre.js

import React from "react";

function Sobre() {
  return (
    <section id="sobre" className="py-5">
      <div className="container">
        <h2>Sobre mim</h2>
        <img
          id="foto"
          src="https://avatars.githubusercontent.com/u/3230685?v=4"
          alt="Emerson Marques Pedro (Memeco)"
          title="Emerson Marques Pedro (Memeco)"
        />
        <br />
        <br />
        <p>
          Meu nome é Emerson Marques Pedro, também conhecido como "Memeco",
          tenho 37 anos e sou{" "}
          <a href="https://i.imgur.com/1M9VA7B.jpg">
            sociólogo e cientista político pela USP (2010)
          </a>
          , cientista de dados pela Awari (2021), analista de dados certificado{" "}
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/BVEHSFR4UNES?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof">
            pelo Google no Coursera
          </a>{" "}
          (2023) e desenvolvedor/programador Front-End com React formado&nbsp;
          <a href="https://imgur.com/a/YabEyUk">pela SoulCode Academy</a>{" "}
          (2023).
        </p>
        <p>
          Estou fazendo um curso de Dev Full-Stack pela DevStars Tech chamado
          PcDDev.
        </p>
        <p>
          Também tenho um site, o{" "}
          <a href="https://HackAgenda.com.br">HackAgenda</a>, uma agenda de
          eventos de tecnologia/hackers pelo Brasil, ele foi fundado em setembro
          de 2013 e é um site em WordPress.
        </p>
        <p>
          Sou apaixonado por desenvolvimento/programação e música. Já fui à mais
          de 300 shows, segundo meu{" "}
          <a href="https://www.setlist.fm/user/memeco">Setlist.fm</a>.
        </p>
        <p>Meu objetivo é aprender e seguir crescendo.</p>
        <p>Sou PcD, pois tenho esclerose múltipla.</p>
        <p>
          Aqui você pode encontrar alguns detalhes sobre meus projetos e
          habilidades.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
