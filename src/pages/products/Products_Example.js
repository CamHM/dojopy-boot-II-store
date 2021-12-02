import React, { useState, useEffect } from 'react';
import ProductCard from "../../components/productCard/ProductCard";
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    /* Mount  */
    useEffect(() => {
        console.log('Hola');
    }, []); // se ejecutal al montar el componente

    /* Update */
    useEffect(() => {
        console.log('Actualización') // Una petición
    }); // Se ejecuta cada vez que se actualiza el componente

    useEffect(() => {
        console.log('Hola, los productos han sido actualizados')
    }, [products]) // se ejecuta cuando una de las dependencias cambia. E.j: products

    /* Unmount  */
    useEffect(() => {
        return () => {
            console.log('Adiós'); // Se ejecuta cuando se desmonta el componente
        }
    }, []);

    console.log(products)
    return (
        <section className="products">
            <button onClick={() => setProducts([{ id: 0 }, {id: 1}])}>Load products</button>
            <button onClick={() => setCount(count + 1)}>Incrementar 1</button>
            <h2>{count}</h2>
        </section>
    )
};

export default Products;