import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

const [usuarios, setUsuarios] = useState([]);
const [cargando, setCargando] = useState(true);

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

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
        .then(respuesta => respuesta.json() )
        .then(resultado_final => { 
            setUsuarios(resultado_final.data)
            console.log(usuarios)
        },
        error => {
            console.log(error);
        }
        )
    }

    const getUsuariosAjaxAW = () => {

        setTimeout(async() => {
            const peticion = await fetch("https://reqres.in/api/users?page=1");
        const {data} =  peticion.json;

        setUsuarios(data);
        setCargando(false);
            alert("Hola")
        },2000);

        
    }


    useEffect(() => {
       // getUsuariosEstaticos();
       getUsuariosAjaxPms();

       //getUsuariosAjaxAW();
    }, []);
    
    if ( cargando == true){
        //cuando esta todo cargando
return (
    <div className='cargando'>
        Cargando datos ...
    </div>
);
    } else{
        //cuando todo ha ido bien 
    return (
        <div>
            <h2>Listado de usuarios via Ajax </h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario => {
                        console.log(usuario);
                        return <li key={usuario.id}>
                            < img src={usuario.avatar} width="20"/>
                            &nbsp;
                            {usuario.first_name} {usuario.last_name}</li>
                    })
                }
            </ol>
        </div>
    )
}

    }
    

    