import React from 'react';

function AgregarUsuario()
{

    function agregarUsuario()
    {
        
    }

    return (
        <div className='container m-auto'>
            <div className='row'>   
                <div className='col-sm-6'>
                     <h2 className='mt-4'>Crear un nuevo usuario</h2>
                </div>
            </div>
           
            <div className='row'>   
                <div className='col-sm-6 offset-43'>
                     <div className='mb-3'>
                        <label hmtlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' id='nombre' placeholder='Ingrese su nombre'/>
                     </div>
                     <div className='mb-3'>
                        <label hmtlFor='email' className='form-label'>Email</label>
                        <input type='email' className='form-control' id='nombre' placeholder='Ingrese su email'/>
                     </div>
                     <div className='mb-3'>
                        <label hmtlFor='telefono' className='form-label'>Telefono</label>
                        <input type='text' className='form-control' id='nombre' placeholder='Ingrese su telefono'/>
                     </div>

                        <button type='submit' onClick={agregarUsuario} className='btn btn-succes'>Guardar</button>

                </div>
            </div>

        </div>
    );
}

export default AgregarUsuario;