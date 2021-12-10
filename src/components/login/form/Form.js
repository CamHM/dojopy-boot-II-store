import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import {products} from "../../../routes/routes";
import './Form.css';

const FIELD_ERROR = 'Completa este campo.';

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        password: '',
        user: ''
    });
    const [errors, setErrors] = useState({
        password: '',
        user: '',
    });

    const history = useHistory();

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value });
    }

    const validateFields = () => {
        const newErrors = {};

        if (values.password.length === 0) {
            // setErrors({...errors, password: FIELD_ERROR}) // { password: 'error', user: '' }
            newErrors['password'] = FIELD_ERROR;
        }

        if (values.user.length === 0) {
            // setErrors({...errors, user: FIELD_ERROR}) // { password: '', user: 'error' }
            newErrors['user'] = FIELD_ERROR;
        }

        /* VERSIÓN SIMPLIFICADA
        Object.keys(values).forEach(key => {
            if (values[key].length === 0) {
                newErrors[key] = FIELD_ERROR;
            }
        });
        */

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateFields();

        if (isValid) {
            fetch(`${process.env.REACT_APP_API_URL}/auth/login`,{
                method:'POST',
                body: JSON.stringify({
                    username: values.user,
                    password: values.password
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.log('Ha ocurrido un error', error));

            history.push(products);
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
                <TextField
                    error={!!errors.user}
                    id="outlined-error"
                    label="Usuario"
                    value={values.user}
                    onChange={handleChange}
                    name="user"
                />
                <p className="error">{errors.user}</p>
            </div>
            <div>
                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    error={!!errors.password}
                />
                <p className="error">{errors.password}</p>
            </div>
            <LoadingButton type="submit" variant="contained">
                Iniciar sesión
            </LoadingButton>
        </form>
    )
};

export default Form;