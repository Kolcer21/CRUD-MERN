import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function UsuarioIndividual({usuario})
{
    const navegar = useNavigate();

    //Amiamos el AOS
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])

    function borrarusuario(idusuario)
    {
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario})
        .then(function(res) {
            alert(res.data);
            navegar(0);
            console.log(res);
        }
        )
        .catch(function(err) {
            console.log(err);
        }
        )
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3' data-aos="fade-left">
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.nombre}</li>
                        <li className='list-group-item'>{usuario.email}</li>
                        <li className='list-group-item'>{usuario.telefono}</li>
                    </ul>

                    

                    <hr></hr>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><button className='btn btn-primary'>Editar</button></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idusuario)}}>Eliminar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    );
}

export default UsuarioIndividual;