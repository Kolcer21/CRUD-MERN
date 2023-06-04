import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UsuarioIndividual from './UsuarioIndividual';

function ListaUsuarios()
{

    const [usuarios, setU] = useState([]);

    useEffect(() => {
        axios.get('/api/usuario/obtenerusuarios').then(res => {
            setU(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    //Mappear usuarios
    const listausuarios = usuarios.map(function(usuario) {  
        return(<div><UsuarioIndividual usuario={usuario} /></div> )
    })

    return (
        <div className='container'>
            <h2>Lista de usuarios</h2>
            <br></br>
            {listausuarios}
        </div>
    );
}

export default ListaUsuarios;