import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CartContext from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ id, name, price, cover }) => {
  const [amount, setAmount] = useState(0);
  const { addProduct } = useContext(CartContext);

  const handleChange = event => setAmount(parseInt(event.target.value));

  const handleSubmitClick = () => {
    addProduct({ id, name, price, cover }, amount);
    setAmount(0);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='product-card'>
      <CardMedia component='img' alt='green iguana' height='240' image={cover} />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {name}
        </Typography>
        <div className='details'>
          <Typography variant='h5' color='text.secondary'>
            ${price}
          </Typography>
          <input type='number' value={amount} onChange={handleChange} min={0} max={10} />
        </div>
      </CardContent>
      <button className='submit' onClick={handleSubmitClick} disabled={amount === 0}>
        Comprar ({amount})
      </button>
    </Card>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
};

ProductCard.defaultProps = {
  id: PropTypes.number,
  name: 'sin registrar',
  cover: '',
  price: 0,
};

export default ProductCard;
