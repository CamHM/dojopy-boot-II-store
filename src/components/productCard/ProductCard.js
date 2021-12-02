import React from "react";
import PropTypes from 'prop-types';
import './ProductCard.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ name, price, cover }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={cover}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    ${price}
                </Typography>
            </CardContent>
        </Card>
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
