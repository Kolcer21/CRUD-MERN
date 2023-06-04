import React, {useState} from 'react';
import uniqid from 'uniqid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AgregarUsuario()
{
    const navegar = useNavigate();
    //Hooks para agregar usuario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');


    function agregarUsuario()
    {
        

        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniqid()
        }
        console.log(usuario);
        axios.post('/api/usuario/agregarusuario', usuario)
        .then(function(res) {
            alert(res.data);
            navegar(0);
            console.log(res);
        })
        .catch(function(err) {  
            console.log(err);
        })
    }

    return (
        <div className=' container text-center'>
            <div className=''>   
                <div className=''>
                     <h2 className='mt-4'>Crear un nuevo usuario</h2>
                </div>
            </div>
           
            <div className=''>   
                <div className=''>
                     <div className='mb-3'>
                        <label hmtlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' id='nombre' placeholder='Ingrese su nombre' value={nombre} onChange={(e) => {setNombre(e.target.value
    )}}/>
                     </div>
                     <div className='mb-3'>
                        <label hmtlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' id='nombre' placeholder='Ingrese su email' value={email} onChange={(e) => {setEmail(e.target.value
    )}}/>
                     </div>
                     <div className='mb-3'>
                        <label hmtlFor='telefono' className='form-label'>Telefono</label>
                        <input type='text' className='form-control' id='nombre' placeholder='Ingrese su telefono' value={telefono} onChange={(e) => {setTelefono(e.target.value
    )}}/>
                     </div>

                        <button type='submit' onClick={agregarUsuario} className='btn btn-success'>Guardar</button>

                </div>
            </div>

        </div>
    );
}

export default AgregarUsuario;