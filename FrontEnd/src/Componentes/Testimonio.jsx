import React from "react";
import "../HojasDeEstilo/Testimonio.css";
const Testimonio = ({ foto, nombre, pais, cargo, empresa, testimonio }) => {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={foto}
        alt={`Fotografia de ${nombre}`}
      />
      <div className="contenedor-info">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong> in <strong>{pais}</strong>
        </p>
        <p className="cargo-testimonio">
          <strong>{cargo}</strong> at <strong>{empresa}</strong>
        </p>
        {testimonio.map(({ id, testimonio }) => (
          <p className="texto-testimonio" key={id}>
            "{testimonio}"
          </p>
        ))}
      </div>
    </div>
  );
};

export default Testimonio;
