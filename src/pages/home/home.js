import React, { useRef, useEffect } from "react";
import "./home.css";
import ItemLink from "../../components/ItemLink";
import { sistemas, servicos } from "../../data/linksData";

export default function Home() {
  const h1Ref = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      h1Ref.current.focus();
    }
  }, []);

  return (
    <aside className="menu-lateral" role="navigation" aria-label="Menu principal">
      <div className="painel-header">
        <h1 ref={h1Ref} tabIndex="-1">Bem-vindo ao Painel</h1>
        <h2>HalexistarService</h2>
        <p>Escolha um dos sistemas ou serviços abaixo para começar.</p>
      </div>

      <section className="menu-secao">
        <h3>📚 Sistemas</h3>
        <nav className="menu-grid-4col">
          {sistemas.flat().map((item, idx) => (
            <ItemLink key={idx} nome={item.nome} icone={item.icone} link={item.link} />
          ))}
        </nav>
      </section>

      <section className="menu-secao">
        <h3>🔗 Serviços</h3>
        <nav className="menu-grid-4col">
          {servicos.map((item, idx) => (
            <ItemLink key={idx} nome={item.nome} icone={item.icone} link={item.link} />
          ))}
        </nav>
      </section>
    </aside>
  );
}
