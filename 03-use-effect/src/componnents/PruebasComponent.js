import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Cristian Cuevas");
    const [fecha, setFecha] = useState("10-02-1979");
    
    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e =>{
        setFecha(Date.now());
    }
    // SOLO SE EJECUTA UNA VES, SOLO AL CARGAR EL COMPONENTE
    useEffect(()=>{
        console.log("has cambiado el componente PruebasComponent")
    }, []);

    // SE EJECUTE SOLO SI CAMBIO DE USUARIO
    useEffect(()=>{
        console.log("has cambiado el componente PruebasComponent")
    }, [usuario]);
  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>
        
        <strong className='label'>{usuario}</strong>
        <strong>{fecha}</strong>
        <p>
        <input type="text"
        onChange={modUsuario}
        placeholder="Cambia el nombre"
        />
        <button onClick={cambiarFecha}>Cambiar fecha</button>
</p>
    
        
    </div>
  )
}
