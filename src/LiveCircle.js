import React from 'react';
import { useState, useEffect } from "react";

const LiveCircle = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log('UseEffect con array vacio')
      }, []);
      
      useEffect(() => {
        console.log('UseEffect sin dependencias')
      });
      
      useEffect(() => {
        console.log('UseEffect con array del contador 1')
      }, [contador1]);

      useEffect(() => {
        console.log('UseEffect con array con ambos contadores')
      }, [contador1,contador2]);
      

    return (
        <div>
            <h1>Ciclo de vida</h1>
            <h2>Contador 1: {contador1}</h2>
            <button className="btn-warning" onClick={() => setContador1(contador1 + 1)}> + </button>
            <h2>Contador 2: {contador2}</h2>
            <button className="btn-warning" onClick={() => setContador2(contador2 + 1)}> + </button>
        </div>
    )
}

export default LiveCircle
