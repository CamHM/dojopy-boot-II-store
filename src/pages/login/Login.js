import React from 'react';
import Menu from '../../components/menu/Menu';
import Form from '../../components/login/form/Form';
import './Login.css';

const Login = () => {
  return (
    <section className='login'>
      <Menu />
      <div className='content'>
        <h2 className='title'>Inicia sesión con nosotros</h2>
        <p className='subtitle'>Podrás ver el registro de tus compras.</p>
        <Form />
      </div>
    </section>
  );
};

export default Login;
