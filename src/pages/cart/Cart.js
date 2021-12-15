import React, { useContext, useMemo } from 'react';
import Menu from '../../components/menu/Menu';
import CartContext from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { products, removeProduct } = useContext(CartContext);

  const total = useMemo(() => {
    return products
      .map(product => product.amount * product.price)
      .reduce((previousValue, currentValue) => {
        return currentValue + previousValue;
      }, 0);
  }, [products]);

  return (
    <section className='cart'>
      <Menu />
      <table className='content'>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={`cart-product-${product.id}`}>
              <td>
                <img src={product.cover} width={100} alt={product.title} />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.amount}</td>
              <td>${product.price * product.amount}</td>
              <td className='delete' onClick={() => removeProduct(product.id)}>
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='total'>
        <b>TOTAL: </b>${total.toFixed(1)}
      </p>
    </section>
  );
};

export default Cart;
