import React from 'react'

export const EventosComponente = () => {

  const hasDadoClick = (e, nombre) => {
    alert("Has dado click!!" + nombre);
  }
  function hasDadoDobleClick(e) {
    alert("Has dado doble click!!");
  }
  const hasEntrado = (e,accion)=>{
    alert(`Has ${accion} a la caja con el mouse`)
  }
  const estasDentro = e => {
    console.log("estas dentro del input,mete tu nombre!!");
  }
  const estasFuera = e => {
    console.log("estas FUERA del input,CHAO!!");
  }
  return (
    <div>
      <h1>Eventos en REACT</h1>
      <p>
        {/*EVENTO CLICK*/}
        <button onClick={e => hasDadoClick(e, "CRISTIAN")}>Dame click!</button>
      </p>
      <p>
        {/*EVENTO DOBLE CLICK*/}
        <button onDoubleClick={hasDadoDobleClick}>Dame doble click!</button>
      </p>
      <div id='caja'
        onMouseEnter={e=> hasEntrado(e,"entrado")}
        onMouseLeave={e=> hasEntrado(e,"salido")}
      >
        Pasa por encima
      </div>
      <p>
        {/*EVENTO focus y blur*/}
        <input type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="Introduce tu nombre..."
        />
      </p>
      

    </div>
  )
}
