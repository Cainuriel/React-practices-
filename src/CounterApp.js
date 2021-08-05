import { useState } from "react";
import React  from 'react';

const CounterApp = () => {

    const [counter, setCounter] = useState(0);

    const functionCounter = () => {

        setCounter(counter + 1);
    }

    

    return (
        <div className='text-center'>
            <h1>Counter Component</h1>

            <button className='btn-success' onClick={functionCounter}> Increment </button>

            <h1>Clicks: {counter} </h1>
            
        </div>
    )
}

export default CounterApp;