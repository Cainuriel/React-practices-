import { useState } from "react";
import React  from 'react';

const ErrorApp = () => {

    const [error, setError] = useState('');

    return (
        <div className='text-center'>
                     <h1>Error Component</h1>
            <button  className="btn-warning mx-4" onClick={() => setError("Se ha generado un Error")}>Simulación de un error</button>
            <button  className="btn-warning mx-4" onClick={() => setError("Otro error más gordo")}>Simulación de otro error</button>
            <button  className="btn-warning mx-4" onClick={() => setError("")}>Sin errores</button>
            { error ? <h1>{error}</h1> : <h1>Sin errores</h1>}
            
        </div>
    )
}

export default ErrorApp;