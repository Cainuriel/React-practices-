import { useState } from "react";
import React  from 'react';

const initialCart = [
    {id: 1, title: 'Articulo 1', description: 'Descripcion n1'},
    {id: 2, title: 'Articulo 2', description: 'Descripcion n2'},
    {id: 3, title: 'Articulo 3', description: 'Descripcion n3'}
];


const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productId) => {
        const deleteItem = cart.filter(product => product.id !== productId); // guarda solo quienes no coincidan con la id pasada.
        setCart(deleteItem); 
    }

    const addProduct = (newProduct) => {
        newProduct.id = Date.now(); 
        const product = [
            newProduct,
            ...cart // copiamos todos los elementos que existian.

        ];
        setCart(product); 
    }

    const editProduct = (editProduct) => {
        const updateItem = cart.map(product => (
                    product.id === editProduct.id
                    ? editProduct // devolvemos la coincidencia.
                    : product
        ));
        setCart(updateItem); 
    }

    return (
        <div className='text-center'>
            <h1>Shopping Cart Component</h1>

            {/* los formularios suelen rellenarse con un objeto. Aqui se simula la accion */}
            <button className='btn-success' onClick={() => addProduct({
                title: 'Nuevo producto',
                description: 'Nueva descripcion'
            })}> Add </button>

            <div>
               { cart.map(item => (
                   <div key={item.id}>
                       <h4>{item.id} {item.title}</h4>
                       <h5>{item.description}</h5>
                       <button className='btn-danger' onClick={() => deleteProduct(item.id)}> Delete </button>
                                   {/* los formularios suelen rellenarse con un objeto. Aqui se simula la accion */}
                       <button className='btn-warning' onClick={() => editProduct({
                            id : item.id,
                            title: 'Titulo actualizado',
                            description: 'Descripcion Actualizada'
                                 })}> update </button>
                     </div>
                    ))}
            </div>

          <div>
              <h1>Imprimir arreglos u objetos</h1>
                    
            <br></br>
            <pre>
                {JSON.stringify(cart, null, 2)}
            </pre>
          </div>

            
        </div>
    )
}

export default ShoppingCart;