import React from "react";
import "./ItemLink.css";

export default function ItemLink({ nome, icone, link }) {
  return (
    <a href={link} className="item-link" target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${nome}`}>
      {icone && <img src={icone} alt="" className="item-icon" />}
      <span className="item-name">{nome}</span>
    </a>
  );
}
