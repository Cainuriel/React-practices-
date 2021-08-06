import React from 'react';
import { useState, useEffect } from "react";

const ResizeComponent = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // variable que retornara un true mientras se cumpla la condicion
    const onlySeeinMobile = windowWidth < 768;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize',handleResize );

        // el componente se queda a la escucha cuando se desmonta. Hay que limpiarlo.
        return () => {
           window.removeEventListener('resize',handleResize );
           console.log('borramos el listener')
        }
    }, [])

    return (
        <div>
            <h1>Pantalla Dinamica</h1>
            <h2>{windowWidth}</h2>
            {
                onlySeeinMobile && // se pintara cuando la variable sea verdadera.
                <h2>Only can see me in mobile size </h2>
            }

        </div>
    )
}

export default ResizeComponent
