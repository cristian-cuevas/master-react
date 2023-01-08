import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

const [usuarios, setUsuarios] = useState([]);

//Generico o basico 



    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "Cristian@reqres.in",
                "first_name": "Cristian",
                "last_name": "Cuevas",

            },
            {
                "id": 2,
                "email": "Tomas@reqres.in",
                "first_name": "Tomas",
                "last_name": "Cuevas",

            },
            {
                "id": 3,
                "email": "Santino@reqres.in",
                "first_name": "Santino",
                "last_name": "Cuevas",

            },

        ]);
    }
    useEffect(() => {
        getUsuariosEstaticos();
    }, []);

   
    return (
        <div>
            <h2>Listado de usuarios via Ajax </h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        console.log(usuario);
                        return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                    })
                }
            </ol>
        </div>
    )
}
