import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/Menu";
import './Users.css';

// Nota: el id es sólo por ejemplo no afecta la lógica del componente
const Users = ({ id }) => {
    const [users, setUsers] = useState([]);

    /* Ciclo de vida del componente
     1) mount > Se carga el componente en el DOM : []
     2) update > El componente se actualiza
       a) Sin arreglo de dependencias
       b) Con dependencias => [id]
     3) unmount > Cuando el componente es retirado del dom
                    => return
    * */

    /*
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))

        return () => {
            console.log('Se quitó la página de usuarios')
        }
    }, [id]);
    */

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <section className="users">
            <Menu />
            <h2 className="title">Nuestros usuarios</h2>
            <div className="container">
                {users.map(user => (
                    <div key={`user-${user.id}`} className="user-card">
                        <b>{user.name.firstname} {user.name.lastname}</b>
                        <p>Correo: {user.email}</p>
                        <p>Teléfono: {user.phone}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Users;