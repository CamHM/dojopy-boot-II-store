import React from 'react';
import { Link } from 'react-router-dom';
import { home } from '../../routes/routes';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className='not-found'>
      <h1>404</h1>
      <h1>Página no encontrada</h1>
      <p>Puedes volver a la página principal dando</p> <Link to={home}>clic acá</Link>
    </section>
  );
};

export default NotFound;
