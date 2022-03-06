import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = values;

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            console.log('Form is valid');
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError('Email not valid'));
            return false
        }
        else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 6 characters and match'));
            return false
        }
        dispatch(removeError());

        return true
    }

    return <>
        <h3 className='auth__title'>Register</h3>
        <form onSubmit={handleSubmit}>

            {msgError && <div className="auth__alert-error">{msgError}</div>}

            <input
                type="text"
                placeholder="Name"
                name="name"
                autoComplete='off'
                className='auth__input'
                onChange={handleInputChange}
                value={name}
            />
            <input
                type="text"
                placeholder="Email"
                name="email"
                autoComplete='off'
                className='auth__input'
                onChange={handleInputChange}
                value={email}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className='auth__input'
                onChange={handleInputChange}
                value={password}
            />
            <input
                type="password"
                placeholder="Confirm"
                name="password2"
                className='auth__input'
                onChange={handleInputChange}
                value={password2}
            />
            <button
                className='btn btn-primary btn-block mb-5'
                type="submit"
            >
                Register
            </button>

            <Link className='link' to="/auth/login">
                Already registered?
            </Link>
        </form>
    </>;
};
