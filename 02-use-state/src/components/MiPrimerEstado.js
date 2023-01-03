import React, {useState} from 'react'

export const MiPrimerEstado = () => {


//        PROBLEMATICA    
//let nombre = "Cristian Cuevas";
//const CambiarNombre = e => {
//    nombre = "Tomas Cuevas";
//};

const [ nombre, setNombre] = useState("Cristian Cuevas");
const CambiarNombre = (e,nombreFijo) => {
       setNombre(nombreFijo);
    };

  return (
    <div>
    <h3>Componente: MiPrimerEstado</h3>
    <strong>
        {nombre}
    </strong>
    &nbsp;
   <button onClick={e =>CambiarNombre(e,"Tomas Cuevas")}>Cambiar nombre por Tomas </button>
   <input type="text" onKeyUp={e=>CambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'></input>
    </div>
  )
}
