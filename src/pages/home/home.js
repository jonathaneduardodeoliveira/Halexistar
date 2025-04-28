import React, { useRef, useEffect } from "react";
import "./home.css";
import ItemLink from "../../components/ItemLink";
import { sistemas, servicos } from "../../data/linksData";

export default function Home() {
  const sistemasRef = useRef(null);

  useEffect(() => {
    if (sistemasRef.current) {
      sistemasRef.current.focus();
    }
  }, []);

  return (
    <aside className="menu-lateral" role="navigation" aria-label="Menu principal">
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/halexistar.jpg`}
          alt="Logo Halexistar"
          className="logo-img"
        />
      </div>

      <section className="menu-secao">
        <h3
          ref={sistemasRef}
          tabIndex="-1"
          aria-label="Sistemas disponíveis"
        >
          📚 Sistemas
        </h3>
        <nav className="menu-grid-3col">
          {sistemas.flat().map((item, idx) => (
            <ItemLink key={idx} nome={item.nome} icone={item.icone} link={item.link} />
          ))}
        </nav>
      </section>

      <section className="menu-secao">
        <h3>🔗 Serviços</h3>
        <nav className="menu-grid-3col">
          {servicos.map((item, idx) => (
            <ItemLink key={idx} nome={item.nome} icone={item.icone} link={item.link} />
          ))}
        </nav>
      </section>
    </aside>
  );
}
