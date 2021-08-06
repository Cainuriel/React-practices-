import { div } from 'prelude-ls';
import React from 'react';
import { useState } from "react";
import CounterApp from './CounterApp';
import ConditionalApp from './ConditionalApp';
import ErrorApp from './ErrorApp';
import ProductApp from './ProductApp';
import ShoppingCart from './ShoppingCart';
import LiveCircle from './LiveCircle';
import FetchCard from './FetchCard';

function App() {

const [condition, setCondition] = useState(true);



  return (

  <div className='text-center'>
       <h1>Uso de UseState y UseEffect</h1>
      <button className="btn-warning" onClick={() => setCondition(!condition)}> UseState / UseEffect </button>

      <div className={condition ? '' : 'd-none'}>
      <h1>UseState usos</h1>
      <CounterApp/>
      <ConditionalApp/>
      <ErrorApp/>
      <ProductApp/>
      <ShoppingCart/>
      </div>
      
      <div className={condition ? 'd-none' : ''}>
      <h1>UseEffect usos</h1>
      {/* <LiveCircle/> */}
      <FetchCard/>
      </div>
  </div>

  );
}

export default App;
