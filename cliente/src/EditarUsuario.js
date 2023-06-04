import React, {useState, useEffect}  from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditarUsuario()
{
    const navegar = useNavigate();

    const params = useParams();

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        axios.post("/api/usuario/obtenerdata", {idusuario: params.idusuario}).then(res => {
          console.log(res.data[0]);
          const datausuario = res.data[0];
          setNombre(datausuario.nombre);
          setEmail(datausuario.email);
          setTelefono(datausuario.telefono);
        });
    }, [params]);

    function editarUsuario(){
        //Nuevo objeto usuario
        const actualizarUsuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
    }

    axios.post('/api/usuario/actualizarusuario', actualizarUsuario)
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
        <div>
            <h2>Editar usuarios</h2>
            <h3>ID de usuario: {params.idusuario}</h3>
            <div className=' container text-center'>
        <div className=''>   
            <div className=''>
                 <h2 className='mt-4'>Hacer cambios en apartados</h2>
            </div>
        </div>
       
        <div className=''>   
            <div className=''>
                 <div className='mb-3'>
                    <label hmtlFor='nombre' className='form-label'>Nombre</label>
                    <input type='text' className='form-control' id='nombre'  value={nombre} onChange={(e) => {setNombre(e.target.value
)}}/>
                 </div>
                 <div className='mb-3'>
                    <label hmtlFor='email' className='form-label'>Email</label>
                    <input type='email' className='form-control' id='nombre'  value={email} onChange={(e) => {setEmail(e.target.value
)}}/>
                 </div>
                 <div className='mb-3'>
                    <label hmtlFor='telefono' className='form-label'>Telefono</label>
                    <input type='text' className='form-control' id='nombre'  value={telefono} onChange={(e) => {setTelefono(e.target.value
)}}/>
                 </div>

                    <button type='submit' onClick={editarUsuario} className='btn btn-success'>Guardar</button>

            </div>
        </div>

    </div>
        </div>
    );


}

export default EditarUsuario;