import React from 'react';
//import { ReactPropTypes } from 'react';

export const TercerCompononte = ({nombre,apellido,ficha}) => {
  return (
    <div>
      <h1>Comunicacion entre componentes</h1>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.grupo}</li>
        <li>{ficha.estado}</li>
      </ul>
    </div>
  )
}

//TercerComponente.ReactPropTypes = {
  //  nombre:ReactPropTypes.string.isrequired,
    //apellido:ReactPropTypes.string.isrequired
    //ficha:ReactPropTypes.object
//}
