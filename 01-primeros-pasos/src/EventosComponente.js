import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e,nombre) => {
        alert("Has dado click!!"+nombre);
    }
  return (
    <div>
        <h1>Eventos en REACT</h1>
    <button onClick={e => hasDadoClick(e,"CRISTIAN")}>Dame click!</button>
    </div>
  )
}
