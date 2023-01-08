import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(()=> {
    //cuando el componente se monta
    alert("el componente avisocomponente esta montado!!");

    //cuando el componente se desmonta
    return() =>{
      alert("COMPONENTE DESMONTADO!!!")

    }

  }, [] );//se ejecuta una ves porque le paso el array vacio
  return (
    <div>
        <hr/>
        <h3>Saludos cristian el MAXIMO </h3>
    <button onClick={ e => {
      alert("bienvenido!!")
    }}>Mostrar alerta</button>
    </div>
  )
}
