import React from "react";
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

    return (
        <article className="product-card">
            <img src={cover} alt={name} />
            <h2>{name}</h2>
            <h3>${price}</h3>
        </article>
    )
};

ProductCard.propTypes = {
    name: PropTypes.string,
    cover: PropTypes.string,
    price: PropTypes.number
};

ProductCard.defaultProps = {
    name: 'sin registrar',
    cover: '',
    price: 0
};

export default ProductCard;
