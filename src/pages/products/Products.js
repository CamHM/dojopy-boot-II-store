import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import Menu from '../../components/menu/Menu';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products?limit=3`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className='products'>
      <Menu />
      <div className='content'>
        {products.map(({ id, title, image, price }) => (
          <ProductCard key={`product-${id}`} id={id} name={title} cover={image} price={price} />
        ))}
      </div>
    </section>
  );
};

export default Products;
