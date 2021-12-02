import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import {cart, login, products, users} from "../../routes/routes";

const Menu = () => {
    return (
        <nav className="menu">
            <NavLink to={users} className="menu-link" activeClassName="active-link">Usuarios</NavLink>
            <NavLink to={products} className="menu-link" activeClassName="active-link">Productos</NavLink>
            <b className="title">Bootcamp Shop</b>
            <NavLink to={login} className="menu-link" activeClassName="active-link">Inicia sesión</NavLink>
            <NavLink to={cart} className="menu-link" activeClassName="active-link">Mi carrito</NavLink>
        </nav>
    )
};

export default Menu;