import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Cristian Cuevas");
    const [fecha, setFecha] = useState("10-02-1979");
    const [contador, setContador] = useState(0);
    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e =>{
        setFecha(Date.now());
    }
    // SOLO SE EJECUTA UNA VES, SOLO AL CARGAR EL COMPONENTE
    useEffect(()=>{
        console.log("has cambiado el componente PruebasComponent");
    }, []);

    // SE EJECUTE SOLO SI CAMBIO DE USUARIO
    
    useEffect(()=>{
    
        
        setContador(contador+1);
        console.log("has cambiado el componente PruebasComponent"+contador);
    }, [fecha,usuario]);


  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        
        <strong className={contador >= 10 ? "label label-green":"label"}>{usuario}</strong>
        <strong className={contador >= 10 ? "label label-green":"label"}>{fecha}</strong>
        <p>
        <input type="text"
        onChange={modUsuario}
        placeholder="Cambia el nombre"
        />
        <button onClick={cambiarFecha}>Cambiar fecha</button>
</p>
    
    {usuario == "CRISTIAN" &&  <AvisoComponent/>}
    </div>
  )
}
