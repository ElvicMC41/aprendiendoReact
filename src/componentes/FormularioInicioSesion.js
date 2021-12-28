import React, { useState } from "react";

//Desde la funcion principal podemos acceder a sus props ("PROPIEDADES") y asi manejar una funcion del index
const FormularioInicioSesion = (props) => {
  console.log(props);
  //Funciones que nos permiten cambiar la contraseaña o el usuario
  const [usuario, cambiarUsuario] = useState("");
  const [password, cambiarPassword] = useState("");

  //con esta funcion podemos comprobar los cambios que se hagan en cada input
  const onChange = (e) => {
    if (e.target.name === "usuario") {
      cambiarUsuario(e.target.value);
    } else if (e.target.name === "contraseña") {
      cambiarPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    if (usuario === "victor" && password === "vic123") {
      props.cambiarSesion(true);
    } else {
      console.log("Los datos no son correctos");
      cambiarUsuario((e.target.value = ""));
      cambiarPassword((e.target.value = ""));
    }
    e.preventDefault();
  };

  return (
    <form className="form" action="" onSubmit={onSubmit}>
      <div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Usuario:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            value={usuario}
            name="usuario"
            id="usuario"
            onChange={onChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Contraseña:{" "}
          </label>
          <input
            className="form-control"
            type="password"
            value={password}
            name="contraseña"
            id="contraseña"
            onChange={onChange}
          />
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-success mt-3" type="submit">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default FormularioInicioSesion;
