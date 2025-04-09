import React, { useState, useRef, useEffect } from "react";
import "./home.css";
import ItemLink from "../../components/ItemLink";
import { sistemas, servicos } from "../../data/linksData";

export default function Home() {
  const [mostrarSistemas, setMostrarSistemas] = useState(false);
  const [mostrarServicos, setMostrarServicos] = useState(false);
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
        <p>Use o menu lateral para acessar os sistemas e serviços disponíveis.</p>
      </div>

      <button
        className="menu-botao"
        onClick={() => setMostrarSistemas((v) => !v)}
        onKeyDown={(e) => e.key === "Enter" && setMostrarSistemas((v) => !v)}
        aria-expanded={mostrarSistemas}
      >
        📚 Sistemas
      </button>

      {mostrarSistemas && (
        <nav className="menu-conteudo">
          {sistemas.map((grupo, i) => (
            <div key={i} className="menu-grid">
              {grupo.map((item, idx) => (
                <ItemLink
                  key={idx}
                  nome={item.nome}
                  icone={item.icone}
                  link={item.link}
                />
              ))}
            </div>
          ))}
        </nav>
      )}

      <button
        className="menu-botao"
        onClick={() => setMostrarServicos((v) => !v)}
        onKeyDown={(e) => e.key === "Enter" && setMostrarServicos((v) => !v)}
        aria-expanded={mostrarServicos}
      >
        🔗 Serviços
      </button>

      {mostrarServicos && (
        <nav className="menu-conteudo">
          <div className="menu-grid">
            {servicos.map((item, idx) => (
              <ItemLink
                key={idx}
                nome={item.nome}
                link={item.link}
              />
            ))}
          </div>
        </nav>
      )}
    </aside>
  );
}
