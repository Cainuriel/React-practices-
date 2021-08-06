import { useState } from "react";
import React  from 'react';

const StandardProduct = {
    title: 'Title',
    description :'Description',
    price: 'price'
}


const ProductApp = () => {

    const [product, setProduct] = useState(StandardProduct);
    const [data, setData] = useState('');
    const [attribute, setAttribute ]  = useState('');


    const updateProduct = (property, value) => {
        console.log('parametros ', property, value);
        setProduct({
            // antes de dar valores al objeto se recomienda copiarlos para no perder la estructura
            ...product, // los tres puntos copia todo. 
            [property]: value // si no lo hubieramos hecho asi hubieramos perdido los demas atributos
        });
    }
    

    return (
        <div className='text-center'>
            <h1>Product Component</h1>

            <button className='btn-warning' onClick={() => setAttribute('title')}> Titulo </button>
            <button className='btn-success' onClick={() => setAttribute('description')}> Description </button>
            <button className='btn-primary' onClick={() => setAttribute('price')}> Precio </button>
            <h4>{attribute}</h4>
            <div className="row">
            <div className="form-group col-4 offset-4">
              <input size="50" type="text" value={data}  onChange={e => setData(e.target.value)} 
                className="form-control" name="" id="" placeholder="Seleccione boton de atributo y escriba aqui el valor"/>
            </div>
            </div>
            
            <button className='btn-success' onClick={() => updateProduct(attribute, data)}> 
            Update </button>

             <h1>Producto </h1>

             <ul>
                 <li>{product.title}</li>
                 <li>{product.description}</li>
                 <li>{product.price}</li>
             </ul>
            
        </div>
    )
}

export default ProductApp;