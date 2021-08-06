import React from 'react';
import { useState, useEffect } from "react";

console.log('Pre-render')

const LiveCircle = () => {

console.log('renderizando');

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log('UseEffect con array vacio')

        return () => {
         console.log('UseEffect con array vacio Clean Up!! ')
       }
      }, []);
      
      useEffect(() => {
        console.log('UseEffect sin dependencias')
        return () => {
          console.log('UseEffect sin dependencias Clean Up!! ')
        }
      });
      
      useEffect(() => {
        console.log('UseEffect con array del contador 1')
        return () => {
          console.log('UseEffect con array del contador 1 Clean Up!! ')
        }
      }, [contador1]);

      useEffect(() => {
        console.log('UseEffect con array con ambos contadores')
        return () => {
          console.log('UseEffect con array con ambos contadores Clean Up!! ')
        }
      }, [contador1,contador2]);
      

    return (
        <div>
          {console.log('devolviendo el renderizado')}
            <h1>Ciclo de vida</h1>
            <h2>Contador 1: {contador1}</h2>
            <button className="btn-warning" onClick={() => setContador1(contador1 + 1)}> + </button>
            <h2>Contador 2: {contador2}</h2>
            <button className="btn-warning" onClick={() => setContador2(contador2 + 1)}> + </button>
        </div>
    )
}

export default LiveCircle
