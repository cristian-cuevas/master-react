//importar modulos de react/dependencias
import React, { Fragment } from "react";


//funcion del componente 
const MiComponente = () => {
    let nombre = "Cristian";
    let apellido = "Cuevas";
    let usuario ={
        nombre:"Cristian",
        apellido:"Cuevas",
        apodo:"Cristian el Maximo"
    };

    console.log(usuario)
   
    return ( 
        <div className="mi-componente">
            <hr/>
                <h2>componente creado</h2>
                <p>este es mi primer componente</p>
                <h3>Datos del usuario</h3>
    <ul>
      <li>Nombre: {usuario.nombre}</li>
      <li>Apellido: {usuario.apellido}</li>
      <li>Apodo: {usuario.apodo}</li>
    </ul>
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Vue</li>
                </ul>
            </div>

            );
};

            // export 
export default MiComponente;