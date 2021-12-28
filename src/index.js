import ReactDOM from "react-dom";
import { useState } from "react";
import Titulo from "./elementos/Titulo.js";

import Usuario from "./componentes/Usuario.js";
import FormularioInicioSesion from "./componentes/FormularioInicioSesion.js";

const App = () => {
  const [sesion, cambiarSesion] = useState(false);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-8 col-lg-4">
          {sesion === true ? (
            <div>
              <Usuario />
              <div className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => cambiarSesion(false)}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Titulo className="text-center">No has iniciado sesión</Titulo>
              {/*Desde aqui le pasaremos argumentos al formulario para acceder a la funcion de cambiar sesion desde alli*/}
              <FormularioInicioSesion cambiarSesion={cambiarSesion} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
