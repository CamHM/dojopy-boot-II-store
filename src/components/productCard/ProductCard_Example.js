import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

/*
nombre (producto)
precio (producto)
imagen (producto)
input > cantidad
botón > agregar al carrito

props > propiedades
* */

const ProductCard = ({ name, price, cover }) => {
  const [bgColor, setBgColor] = useState('white');
  const [count, setCount] = useState(0);

  const handleClick = (color = 'white') => {
    setBgColor(color);
    console.log('Color: ', bgColor);
  };

  const handleIncrement = () => {
    setCount(prevState => prevState + 1); // 1 -> 2 ->
    console.log('Cuenta: ', count); // 0 -> 1 ->
  };

  return (
    <article className='product-card' style={{ backgroundColor: bgColor }}>
      <img src={cover} alt={name} />
      <h2>{name}</h2>
      <h3>${price}</h3>
      <button onClick={() => handleClick('green')}>Verde</button>
      <button onClick={() => handleClick('red')}>Rojo</button>
      <button onClick={() => handleClick('blue')}>Azul</button>
      <button onClick={() => handleClick()}>Reset</button>

      <h2>{count}</h2>
      <button onClick={handleIncrement}>Aumentar en 1</button>
    </article>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
};

ProductCard.defaultProps = {
  name: 'sin registrar',
  cover: '',
  price: 0,
};

export default ProductCard;
