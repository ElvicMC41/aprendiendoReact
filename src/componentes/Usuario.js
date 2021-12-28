import React from "react";
import Titulo from "../elementos/Titulo.js";

const Usuario = () => {
  const nombre = "victor";
  return (
    <div className="text-center">
      <Titulo>Hola {nombre}</Titulo>
      <p>Iniciaste sesión</p>
    </div>
  );
};

export default Usuario;
