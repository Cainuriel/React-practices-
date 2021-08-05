import { useState } from "react";
import React  from 'react';

const ConditionalApp = () => {

    const [condition, setCondition] = useState(true);

    return (
        <div className='text-center'>
            <h1>Conditional Component</h1>

            <button className="btn-warning" onClick={() => setCondition(!condition)}> ON / OFF </button>

            <h1> {condition ? 'Encendido' : 'Apagado'} </h1>
            
        </div>
    )
}

export default ConditionalApp;